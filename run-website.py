#!/usr/bin/env python3
import http.server
import socketserver
import os
import json
from urllib.parse import urlparse, parse_qs

class WebsiteHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/' or self.path == '/index.html':
            self.send_response(200)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            
            # Read and serve the HTML file
            with open('client/index.html', 'r', encoding='utf-8') as f:
                content = f.read()
                self.wfile.write(content.encode('utf-8'))
        else:
            super().do_GET()
    
    def do_POST(self):
        if self.path == '/api/contact':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                # Parse JSON data
                data = json.loads(post_data.decode('utf-8'))
                print(f"Contact form submission: {data}")
                
                # Send success response
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = {'success': True, 'message': 'Message received successfully!'}
                self.wfile.write(json.dumps(response).encode('utf-8'))
            except:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                response = {'success': False, 'message': 'Invalid request'}
                self.wfile.write(json.dumps(response).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

PORT = 5173

try:
    with socketserver.TCPServer(("0.0.0.0", PORT), WebsiteHandler) as httpd:
        print(f"🚀 JJM Technology website running at http://0.0.0.0:{PORT}")
        print("✅ Server ready")
        httpd.serve_forever()
except Exception as e:
    print(f"Error starting server: {e}")
    # Fallback to simple file serving
    os.chdir('client')
    with socketserver.TCPServer(("0.0.0.0", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
        print(f"🚀 JJM Technology website (simple mode) running at http://0.0.0.0:{PORT}")
        httpd.serve_forever()