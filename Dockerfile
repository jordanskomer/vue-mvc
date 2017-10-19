FROM node:7.10.1-alpine
MAINTAINER Jordan Skomer <jordan.skomer@gatewaystaff.com>

# ENV Variables
ENV DOCKER_ROOT /vue-mvc

# Install Packages
ADD ./package.json ./yarn.lock ./tmp/
RUN cd ./tmp && yarn

# Move packages to vendor folder
RUN mkdir -p $DOCKER_ROOT && cd $DOCKER_ROOT && ln -s /tmp/node_modules
WORKDIR $DOCKER_ROOT

# Setup Project
COPY ./ ./

# Launch Vue-loader Dev Server
CMD yarn run dev