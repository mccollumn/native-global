# Native Global

Monorepo for React Native Web/IOS/Android app deployment

## Setup

- npm install

- npm start

## Docs

- Building standalone apps

  https://docs.expo.dev/distribution/building-standalone-apps/

## Deploy to Heroku

- ### Setup

  - Install the Heroku CLI

    ```
    sudo snap install heroku --classic
    ```

  - Install the Static CLI Plugin

    ```
    heroku plugins:install heroku-cli-static
    ```

  - Log into your Heroku account

    ```
    heroku login
    ```

  - Ensure the static buildpack is set (it should be already)

    ```
    heroku buildpacks:set https://github.com/hone/heroku-buildpack-static
    ```

- ### Deploy

  https://gist.github.com/hone/24b06869b4c1eca701f9

  - Build for web

    ```
    npm run build
    ```

  - Deploy
    ```
    heroku static:deploy
    ```
