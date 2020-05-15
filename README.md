Dora Boateng: A reference of cultures past and present.

>TODO: quick mission and intro

<details>
    <summary>Contents</summary>

- [Local setup](#local-setup)
    - [Requirements](#requirements)
    - [Running the app locally](#running-the-app-locally)
    - [Useful commands](#useful-commands)
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
- A POSIX-compliant terminal, such as:
    - [Visual Studio Code terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
    - [cmder](https://cmder.net)
    - [Cygwin](https://www.cygwin.com)
    - [Bash](https://www.gnu.org/software/bash)
    - [Zsh](https://www.zsh.org)

If you're on Linux or Mac, you already have a POSIX-compliant terminal.

**Optional, but recommended:**

- [BuildKit](https://docs.docker.com/develop/develop-images/build_enhancements)

## Running the app locally

```shell
docker-compose up --detach
```

The app will be available at the URL: http://localhost:3000

To stop the app:

```shell
docker-compose down
```

## Useful commands

```shell
# Tail the last 5 lines from the logs.
docker-compose logs --tail 5 web

# Follow the logs as they come in (CMD+C/CTRL+C to exit).
docker-compose logs --follow web

# Launch a shell into the web contatiner.
docker-compose exec web ash
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
