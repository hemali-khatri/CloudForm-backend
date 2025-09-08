#!/bin/bash
set -e

echo "======================================"
echo " Fetching DB credentials from Secrets Manager..."
echo "======================================"

cd /home/ec2-user/backend-app
# Run migrations
npx knex migrate:latest --env production

echo "✅ Running Knex seeds..."
npx knex seed:run --env production

echo "✅ Knex migrations completed successfully."
