#!/bin/bash
set -e

# echo "======================================"
# echo " Installing jq (if not available)..."
# echo "======================================"
# if ! command -v jq &> /dev/null
# then
#     echo "jq not found, installing..."
#     yum install -y jq
# else
#     echo "jq is already installed."
# fi

echo "======================================"
echo " Fetching DB credentials from Secrets Manager..."
echo "======================================"

# # Fetch secret JSON string
# SECRET_VALUE=$(aws secretsmanager get-secret-value \
#   --secret-id "$DB_SECRET_ARN" \
#   --region "$AWS_REGION" \
#   --query SecretString \
#   --output text)

# # Parse values using jq
# DB_USER=$(echo "$SECRET_VALUE" | jq -r .username)
# DB_PASS=$(echo "$SECRET_VALUE" | jq -r .password)
# DB_HOST=$(echo "$SECRET_VALUE" | jq -r .host)
# DB_NAME=$(echo "$SECRET_VALUE" | jq -r .dbname)

# echo "======================================"
# echo " Running Knex migrations..."
# echo " DB Name: $DB_NAME"
# echo " DB Host: $DB_HOST"
# echo "======================================"

# # Pass creds as ENV variables so knexfile.js can read them
# export DB_USER DB_PASS DB_HOST DB_NAME
cd /home/ec2-user/backend-app
# Run migrations
npx knex migrate:latest --env production

echo "✅ Running Knex seeds..."
npx knex seed:run --env production

echo "✅ Knex migrations completed successfully."
