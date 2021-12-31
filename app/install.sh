#!/bin/bash

apt-get update -y && \
apt-get -y install openssh-server dos2unix build-essential && \
apt-get -y install python3-dev curl sudo git nano && \
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - && \
apt-get install -y nodejs && \
npm install -g n && n 14.17.6 && PATH="$PATH" && n node/14.17.6
npm install -g npm@8.1.1 && npm install -g @vue/cli && \
npm install --global yarn