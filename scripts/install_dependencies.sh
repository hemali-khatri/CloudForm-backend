#!/bin/bash

APP_DIR="/home/ec2-user/backend-app"
cd "$APP_DIR"

# Install Node.js 18.x
echo "Installing Node.js 18..."
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Fix file ownership and permissions
echo "Fixing permissions..."
sudo chown -R ec2-user:ec2-user "$APP_DIR"

# Install dependencies
echo "Installing project dependencies..."
npm install
