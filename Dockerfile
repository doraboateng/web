ARG NODE_VERSION=12.16.3

# Base image.
FROM node:${NODE_VERSION}-alpine3.11 AS base

WORKDIR /boateng-web

# Development stage.
FROM base AS dev

# TODO: install dev tools

# Build stage.
FROM base as build

ARG BUILD_VERSION
ENV BUILD_VERSION ${BUILD_VERSION}
# ENV NODE_ENV production

COPY ./public /boateng-web/public
COPY ./src /boateng-web/src
COPY ./.babelrc /boateng-web/
COPY ./next-env.d.ts /boateng-web/
COPY ./next.config.js /boateng-web/
COPY ./package.json /boateng-web/
COPY ./styled.d.ts /boateng-web/
COPY ./tsconfig.json /boateng-web/
COPY ./yarn.lock /boateng-web/
RUN yarn install && yarn build

# Production stage.
FROM base AS prod

COPY --chown=node:node --from=build /boateng-web/.next /boateng-web/.next
COPY --chown=node:node --from=build /boateng-web/public /boateng-web/public
COPY --chown=node:node --from=build /boateng-web/node_modules /boateng-web/node_modules
COPY --chown=node:node --from=build /boateng-web/package.json /boateng-web/

USER node

ENV APP_PORT 3300
ENTRYPOINT ["ash", "-c", "yarn start --port $APP_PORT"]
