#!/bin/bash

git reset --hard origin/dev
git pull
cd app/ && yarn build