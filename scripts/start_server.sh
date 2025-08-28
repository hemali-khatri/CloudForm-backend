#!/bin/bash

APP_DIR="/home/ec2-user/backend-app"

echo "Starting Node.js backend server..."

cd "$APP_DIR"

# Ensure env vars are loaded (if set in /etc/profile.d/)
source /etc/profile.d/db_env.sh
source /etc/profile.d/api_url.sh

# Start the server in the background using nohup
nohup node server.js > backend.log 2>&1 &
echo "Server started."
