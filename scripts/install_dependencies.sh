#!/bin/bash
cd /home/ec2-user/backend-app

# Install Node.js 16.x
curl -sL https://rpm.nodesource.com/setup_16.x | bash -
yum install -y nodejs

# Install project dependencies
npm install
