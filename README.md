# Native Global

Monorepo for React Native Web/IOS/Android app deployment

## Setup

- `npm install --force`
  Force is needed due to current issue with "@testing-library/react-native": "^9.0.0"

- `npm start`

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

  - Add Heroku remote to local repo

    ```
    heroku git:remote -a native-global
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

## Start Storybook

```
 npm run storybook
 npm run storybook:web
```
