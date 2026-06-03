import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = "taf-ua.com"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Serve from the 'taf-ua.com' directory
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Redirect '/' to '/en/' to match the vercel.json redirect configuration
        if self.path == '/':
            self.send_response(302)
            self.send_header('Location', '/en/')
            self.end_headers()
            return
        return super().do_GET()

if __name__ == "__main__":
    # Ensure working directory is the folder where this script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Allow port reuse to avoid 'Address already in use' errors on quick restarts
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        print(f"Local development server started.")
        print(f"URL: http://localhost:{PORT}/")
        print("Press Ctrl+C to stop the server.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping server.")
