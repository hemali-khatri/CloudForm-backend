#!/bin/bash

echo "Stopping Node.js backend server..."

# Find and kill any process running server.js
pkill -f "node server.js" || echo "No server.js process found."

echo "Server stopped."
