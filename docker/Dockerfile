FROM ubuntu:18.04
MAINTAINER Lars Reith

RUN apt-get update && apt-get install -y 
RUN apt-get install -y nodejs
RUN apt-get install -y npm

# Install Yarn
RUN apt-get install -y curl
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install yarn -y