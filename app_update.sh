#!/bin/bash

git reset --hard origin/dev
git pull
export NODE_ENV=production
cd app/ && yarn build