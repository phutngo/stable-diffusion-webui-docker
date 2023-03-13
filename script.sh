#!/bin/bash

# Connect to remote server
ssh paperspace@65.49.54.96 << EOF
# Send password
echo "phunster"
# Change directory
cd Code/stable-diffusion-webui-docker
# Run docker-compose command
docker-compose --profile auto up --build
EOF
