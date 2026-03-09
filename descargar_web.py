import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin, unquote

base_dir = r"d:\Proyectos\ReaperDrones\taf-ua.com"
domain = "https://taf-ua.com"
session = requests.Session()
downloaded = set()

def sanitize_path(path):
    path = unquote(path)
    path = path.split('?')[0].split('#')[0]
    return path.strip('/')

def download_file(url, local_path):
    if local_path in downloaded:
        return
    downloaded.add(local_path)
    
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    if os.path.exists(local_path):
        # We also want to process existing CSS so its fonts get downloaded
        if local_path.endswith('.css'):
            process_css(local_path, url)
        return

    try:
        print(f"Downloading {url} -> {local_path}")
        response = session.get(url, stream=True, timeout=10)
        if response.status_code == 200:
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            
            if local_path.endswith('.css'):
                process_css(local_path, url)
    except Exception as e:
        print(f"Failed to download {url}: {e}")

css_url_pattern = re.compile(r'url\([\'"]?(.*?)[\'"]?\)')

def process_css(local_path, css_url):
    try:
        with open(local_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return

    matches = css_url_pattern.findall(content)
    new_content = content
    changed = False

    for match in matches:
        if match.startswith('data:') or match.startswith('#'):
            continue
            
        asset_url = urljoin(css_url, match)
        if asset_url.startswith(domain):
            rel_path = sanitize_path(asset_url[len(domain):])
            if rel_path:
                asset_local_path = os.path.join(base_dir, os.path.normpath(rel_path))
                download_file(asset_url, asset_local_path)
                
                # Optional: rewrite url() to be absolute from root /
                new_url = '/' + rel_path
                new_content = new_content.replace(match, new_url)
                changed = True

    if changed:
        with open(local_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

def process_html_files():
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                print(f"Processing {file_path}")
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        soup = BeautifulSoup(f.read(), 'html.parser')
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
                    continue
                
                changed = False

                for tag in soup.find_all(['link', 'script', 'img', 'video', 'source', 'a']):
                    url = None
                    attr_name = None
                    
                    if tag.name == 'link' and tag.get('rel') == ['stylesheet']:
                        url = tag.get('href')
                        attr_name = 'href'
                    elif tag.name == 'script' and tag.get('src'):
                        url = tag.get('src')
                        attr_name = 'src'
                    elif tag.name in ['img', 'video', 'source'] and tag.get('src'):
                        url = tag.get('src')
                        attr_name = 'src'
                    
                    # We might also want to change 'a' tag hrefs to absolute '/' paths
                    if tag.name == 'a' and tag.get('href') and tag.get('href').startswith(domain):
                        old_url = tag.get('href')
                        rel_path = sanitize_path(old_url[len(domain):])
                        tag['href'] = '/' + rel_path
                        changed = True

                    if tag.name == 'link' and tag.get('href') and tag.get('rel') != ['stylesheet']:
                        if tag.get('href').startswith(domain):
                            old_url = tag.get('href')
                            rel_path = sanitize_path(old_url[len(domain):])
                            tag['href'] = '/' + rel_path
                            changed = True
                            
                    if tag.name == 'img' and tag.get('srcset'):
                        # Simplistic approach to srcset
                        srcset = tag.get('srcset')
                        new_srcset = srcset.replace(domain + '/', '/')
                        if new_srcset != srcset:
                            tag['srcset'] = new_srcset
                            changed = True

                    if not url or attr_name is None:
                        continue
                        
                    if url.startswith(domain):
                        rel_path = sanitize_path(url[len(domain):])
                        if rel_path:
                            local_asset_path = os.path.join(base_dir, os.path.normpath(rel_path))
                            download_file(url, local_asset_path)
                            
                            # Update to absolute root-relative
                            tag[attr_name] = '/' + rel_path
                            changed = True

                if changed:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(str(soup))

if __name__ == "__main__":
    process_html_files()
    print("Done rescuing files!")
