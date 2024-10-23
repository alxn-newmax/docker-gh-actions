echo "Cleaning unused container images..."
# Clean unused images
sudo docker system prune --all -f

echo "Done!"