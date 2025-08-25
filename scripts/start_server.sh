#!/bin/bash
cd /home/ec2-user/backend-app

# Kill any existing Node app running on port 3000 (adjust port if needed)
pkill -f "node" || true

# Start the Node.js backend app in background, redirect output to log
nohup npm start > /home/ec2-user/backend.log 2>&1 &
