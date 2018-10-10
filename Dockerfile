FROM nginx:alpine
COPY dist/uxtemplate /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
EXPOSE 80
