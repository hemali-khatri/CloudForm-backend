#!/bin/bash
cd /home/ec2-user/backend-app

# Install Node.js 16.x (using sudo to ensure proper permissions)
echo "Installing Node.js..."
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs

# Clean npm cache to avoid any issues
echo "Cleaning npm cache..."
sudo npm cache clean --force

# Install project dependencies (use sudo to ensure npm is available)
echo "Installing project dependencies..."
sudo npm install
