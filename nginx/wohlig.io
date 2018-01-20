server {
	listen 443 ssl;
	server_name sicomoro.wohlig.co.in;
	ssl_certificate /etc/letsencrypt/live/sicomoro.wohlig.co.in/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/sicomoro.wohlig.co.in/privkey.pem;
	location /api {
		proxy_pass http://127.0.0.1:80;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
	location / {
		proxy_pass http://127.0.0.1:80;
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
		proxy_set_header X-Forwarded-Proto $scheme;
	}
	location /backend {
		root /home/sicomora;
		index index.html index.htm;
	}
}
server {
	listen 80;
	server_name sicomoro.wohlig.co.in;
	return 301 https://sicomoro.wohlig.co.in$request_uri;
}