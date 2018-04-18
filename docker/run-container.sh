echo "Remove old container"
docker rm docker-wizard

echo "Start new container"
docker run -it \
  --name docker-wizard \
  -p 3001:3000 \
  -v /Users/larsreith/Documents/repositories/wizard:/wizard/ \
  wizard
