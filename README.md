[![Build Status](https://travis-ci.com/kwcay/boateng-web.svg?branch=stable)](https://travis-ci.com/kwcay/boateng-web)
[![Maintainability](https://img.shields.io/codeclimate/maintainability-percentage/kwcay/boateng-web)](https://codeclimate.com/github/kwcay/boateng-web/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5b07645aa53a13f4aa9e/test_coverage)](https://codeclimate.com/github/kwcay/boateng-web/test_coverage)
![GitHub release](https://img.shields.io/github/v/release/kwcay/boateng-web)

Dora Boateng: A reference of cultures past and present.

>Preserving and promoting our languages and heritage.

_Looking to contribute? Read our [contribution notes here](https://github.com/kwcay/boateng-web/blob/stable/docs/contributing.md)._

<details>
    <summary>Table of contents</summary>

- [Local setup](#local-setup)
    - [Requirements](#requirements)
    - [Running the app locally](#running-the-app-locally)
    - [Importing sample data](#importing-sample-data)
    - [Other useful commands](#other-useful-commands)
- [Reporting Bugs](#reporting-bugs)
- [Reporting Security Issues](#reporting-security-issues)
- [Contributing](https://github.com/kwcay/boateng-web/blob/stable/docs/contributing.md)
- [Creating a release](https://github.com/kwcay/boateng-web/blob/stable/docs/releasing.md)
- [License](#license)
</details>

# Local setup

## Requirements

- [Docker](https://www.docker.com) & [Docker Compose](https://docs.docker.com/compose/install)
- [Visual Studio Code](https://code.visualstudio.com)
- A POSIX-compliant terminal, such as: [Visual Studio Code terminal](https://code.visualstudio.com/docs/editor/integrated-terminal), [cmder](https://cmder.net), [Cygwin](https://www.cygwin.com), [Bash](https://www.gnu.org/software/bash), [Zsh](https://www.zsh.org), or [others](https://alternativeto.net/software/zsh).

>Note: If you're on Linux or Mac, you already have a POSIX-compliant terminal.

### Optional, but recommended:

- [BuildKit](https://docs.docker.com/develop/develop-images/build_enhancements)

## Running the app locally

```shell
# If you don't have a .env file, create it.
cp .env.sample .env

# Start the app.
docker-compose up --detach

# Make sure the latest schema is loaded.
# TODO: use the graph utils CLI.
curl localhost:8080/admin/schema --data-binary "@../graph/src/schema/graph.gql" \
    && curl localhost:8080/alter --data-binary "@../graph/src/schema/indices.dgraph"

# Load sample data.
docker cp sample/rdf.gz boateng_web_alpha_1:/tmp/rdf.gz
docker-compose exec alpha dgraph live \
    --alpha 127.0.0.1:9080 \
    --files /tmp/rdf.gz \
    --format rdf \
    --zero zero:5080
```

The app will be available at the URL: http://localhost:3300

To stop the app:

```shell
docker-compose stop
```

To stop the app and remove all containers:

```shell
docker-compose down
```

## Other useful commands

```shell
# Tail the last 5 lines from the logs.
docker-compose logs --tail 5 web

# Follow the logs as they come in (CMD+C or CTRL+C to exit).
docker-compose logs --follow web

# Launch a shell into the web contatiner.
docker-compose exec web ash

# Update dependencies.
docker-compose exec web yarn upgrade
```

# Reporting bugs

>TODO

# Reporting security issues

>TODO

# Contributing

[Notes](https://github.com/kwcay/boateng-web/blob/stable/docs/contributing.md)

# Creating a release

[Notes](https://github.com/kwcay/boateng-web/blob/stable/docs/releasing.md)

# License

[GNU General Public License v3](https://github.com/kwcay/boateng-web/blob/stable/LICENSE)

Copyright © Kwahu & Cayes
