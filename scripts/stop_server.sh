#!/bin/bash

echo "Stopping Node.js backend server..."

# Find and kill any process running server.js
pkill -f "node backendreact.js" || echo "No backendreact.js process found."
# pm2 delete backend-app || echo "No PM2 process named backend-app found."

echo "Server stopped."
