#!/bin/bash

APP_DIR="/home/ec2-user/backend-app"

echo "Starting Node.js backend server..."

cd "$APP_DIR"

# Start the backend app using PM2
pm2 start backendreact.js --name backend-app

# Save the PM2 process list to be restarted on reboot
pm2 save

# Set PM2 to restart on system reboot (if not already done)
pm2 startup systemd -u ec2-user --hp /home/ec2-user

# Enable PM2 to run on reboot
sudo systemctl enable pm2-ec2-user

echo "Server started and PM2 is managing the process."
# Start the server in the background using nohup
# nohup node server.js > backend.log 2>&1 &
# echo "Server started."
