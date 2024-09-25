#!/bin/sh

# Create the docker-compose file
echo "version: '3'" > google.txt
echo "services:" >> google.txt
echo "  my-service:" >> google.txt
echo "    image: my-image:latest" >> google.txt
echo "    ports:" >> google.txt
echo "      - '8080:80'" >> google.txt


docker-compose up -d

