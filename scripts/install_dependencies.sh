#!/bin/bash
cd /home/ec2-user/backend-app

echo "Installing Node.js..."
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -

sudo yum install -y nodejs

# Install dependencies
echo "Installing project dependencies..."
npm install