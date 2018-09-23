FROM php:7.2-apache

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN apt-get update && \
    apt-get install -y --no-install-recommends git zip

RUN curl --silent --show-error https://getcomposer.org/installer | php

COPY . /var/www/html/
WORKDIR /var/www/html/

RUN php composer.phar install







# docker build -t hw2vue/hw2vue-authserver .
# docker run -p 8002:80 --name hw2vue-authserver hw2vue/hw2vue-authserver
