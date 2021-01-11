[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![Build Status](https://travis-ci.com/doraboateng/web.svg?branch=stable)](https://travis-ci.com/doraboateng/web)
[![Maintainability](https://img.shields.io/codeclimate/maintainability-percentage/doraboateng/web)](https://codeclimate.com/github/doraboateng/web/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7150582b4f44ad59a0b9/test_coverage)](https://codeclimate.com/github/doraboateng/web/test_coverage)
![GitHub release](https://img.shields.io/github/v/release/doraboateng/web)

Here lies the source code for [Dora Boateng](https://doraboateng.com), a free tool dedicated to preserving and promoting our languages and heritage.

_Looking to add or update content? Get in touch with us: dora@kwcay.co._

_Looking to contribute to our source code? Read our [contribution notes here](docs/contributing.md)._

## Table of contents

- [Setting up your local environment](#setting-up-your-local-environment)
- [Update GraphQL schema and typings](#update-graphql-schema-and-typings)
- [Reporting Bugs](#reporting-bugs)
- [Reporting Security Issues](#reporting-security-issues)
- [Contributing](docs/contributing.md)
- [License](#license)

## Setting up your local environment

<details>
    <summary>Software requirements</summary>

Make sure the following software is installed on your local machine:

- [Git](https://git-scm.com)
- [Node](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

**Optional, but recommended:**

- [Visual Studio Code](https://code.visualstudio.com)

</details>

>TODO: You'll also need to create an environment file with the proper credentials.

Once you have the required software, you can run the app locally from a terminal:

```shell
# Clone the source code locally.
git clone git@github.com:doraboateng/web.git
cd web

# Install the dependencies.
yarn install

# Run the app.
yarn dev
```

The app will be available at the URL: http://localhost:3000.

## Update GraphQL schema and typings

```shell
yarn update-schema-types
```

## Reporting bugs

>TODO

## Reporting security issues

>TODO

## Contributing

Read our [contribution notes here](docs/contributing.md).

## License

[GNU General Public License v3](LICENSE)

[Copyright &copy; Kwahu &amp; Cayes](https://kwcay.co)
