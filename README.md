# Native Global

Monorepo for React Native Web/IOS/Android app deployment

## Setup

- npm install

- npm start

- Build for web
  ```
  npm run build
  ```

## Docs

- Building standalone apps

  https://docs.expo.dev/distribution/building-standalone-apps/

## Deploy to Heroku

https://gist.github.com/hone/24b06869b4c1eca701f9

- Install the Static CLI Plugin

  ```
  heroku plugins: install heroku-cli-static
  ```

- Set the buildpack

  ```
  heroku buildpacks:set https://github.com/hone/heroku-buildpack-static
  ```

- Deploy
  ```
  heroku static:deploy
  ```
