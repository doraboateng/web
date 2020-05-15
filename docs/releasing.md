# Creating a release

>TODO

```shell
docker rmi doraboateng/web:0.1.0
docker build \
    --build-arg BUILD_VERSION=0.1.0 \
    --build-arg GIT_HASH=$(git rev-parse --short HEAD) \
    --force-rm \
    --tag doraboateng/web:0.1.0 \
    --target prod \
    .
```
