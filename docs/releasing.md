# Creating a release

>TODO: create pre-releases first
>TODO: script it

1. Make sure all tests pass:

```shell
docker-compose restart
docker-compose exec web yarn qa
```

2. Update the version number in `package.json`, commit the change and push it up to Github.

3. Create release on [Github](https://github.com/kwcay/boateng-web/releases/new?target=stable).

Follow [this link](https://github.com/kwcay/boateng-web/releases) to view the latest releases.

4. Publish the release to Docker Hub:

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
cat ./.docker-hub-token \
    | docker login --username ... --password-stdin \
    && docker push doraboateng/web:$(git describe --abbrev=0 --tags) \
    && docker push doraboateng/web:latest
```

- [Github releases](https://github.com/kwcay/boateng-web/releases)
- [Docker Hub releases](https://hub.docker.com/repository/docker/doraboateng/web/tags)
