# Creating a release

>TODO

1. Make sure all tests pass:

```shell
docker-compose restart
docker-compose exec web yarn qa
```

2. Create release on [Github](https://github.com/kwcay/boateng-web/releases/new?target=stable).

Follow [this link](https://github.com/kwcay/boateng-web/releases) to view the latest releases.

3. Publish the release to Docker Hub:

```shell
# Retrieve latest tags from Github.
git fetch --tags && git pull

# Build release.
docker build \
    --build-arg BUILD_VERSION=$(git describe --abbrev=0 --tags) \
    --force-rm \
    --tag doraboateng/web:$(git describe --abbrev=0 --tags) \
    --target prod \
    .

# Tag latest release.
docker rmi --force doraboateng/web:latest
docker tag doraboateng/web:$(git describe --abbrev=0 --tags) doraboateng/web:latest

# Publish to Docker Hub.
cat ./.docker-hub-token | docker login --username ... --password-stdin
docker push doraboateng/web:$(git describe --abbrev=0 --tags)
docker push doraboateng/web:latest
```
