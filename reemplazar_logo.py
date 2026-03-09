import os
import shutil

src_logo = r"d:\Proyectos\ReaperDrones\Logo_Reaper.png"
dst_logo = r"d:\Proyectos\ReaperDrones\taf-ua.com\Logo_Reaper.png"

print("Copiando logo...")
try:
    shutil.copyfile(src_logo, dst_logo)
    print("Logo copiado exitosamente.")
except Exception as e:
    print("Error copiando logo:", e)

search_dir = r"d:\Proyectos\ReaperDrones\taf-ua.com"
replacements = [
    ("wp-content/uploads/2025/08/logo.svg", "Logo_Reaper.png"),
    ("wp-content/uploads/2025/08/logo-big.svg", "Logo_Reaper.png"),
    ("wp-content/uploads/2025/09/header-big-logo.svg", "Logo_Reaper.png"),
    ("wp-content/uploads/2025/09/logo-mob-black.svg", "Logo_Reaper.png"),
    ("wp-content/uploads/2025/09/logo-mob-white.svg", "Logo_Reaper.png"),
]

count = 0
for root, dirs, files in os.walk(search_dir):
    for file in files:
        if file.endswith(".html") or file.endswith(".css") or file.endswith(".js"):
            path = os.path.join(root, file)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements:
                    new_content = new_content.replace(old, new)
                
                if new_content != content:
                    with open(path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    count += 1
            except Exception as e:
                pass

print(f"Archivos actualizados: {count}")
