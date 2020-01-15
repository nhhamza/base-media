# abb-terminal-insight

Application for managing driver's information, trucks load/unload status and geolocation.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Local Server](#local-server)
- [Client Application](#client-application)
- [Start the App](#start-the-app)
- [Testing](#testing)
- [Deployment](#deployment)

## Introduction

This project is using the following technologies:

- [Reactjs](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Capacitor](https://capacitor.ionicframework.com) as a device building technology.
- [Apache Cordova](https://cordova.apache.org/) for mobile integration plugins.
- Styles generated with [Sass](http://sass-lang.com/) and [styled-components](https://www.styled-components.com/)
- [Prettier](https://prettier.io/) with [ESlint](https://eslint.org/) and [Stylelint](https://stylelint.io/user-guide/cli) for stable code formatting.
- Unit tests with [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/)

## Prerequisites

1.- Install [Node.js](http://nodejs.org) version 12.10.x or higher

- (optional) In OSX use [homebrew](http://brew.sh) `brew install node` or download the DMG from [nodejs](https://nodejs.org/es/)
- (optional) In Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

For different versions of node, it is possible to use [Node Version Manager](https://github.com/creationix/nvm)

2.- Development environment for iOS:

- Install the latest version of [Xcode](https://developer.apple.com/xcode/) (currently v11.0)
- Install [CocoaPods](https://cocoapods.org/) with `sudo gem install cocoapods` in your system as global.

  3.- Development for Android:

- Install the latest version of [Android Studio](https://developer.android.com/studio) (currently v3.5.1)

## Installation

To install the server just follow these steps:

```
git clone https://github.com/sopraux/abb-terminal-insight.git
cd abb-terminal-insight
yarn global add cordova nodemon serve  or  npm install -g cordova nodemon serve
cordova -v  (version should be 9.0.0 or higher. You might need to close and reopen your terminal)
yarn or npm install  (to install the local server dependencies)
cd client
yarn or npm install  (to install the client dependencies)
cd ..
```

It is recommended to run `yarn build` or `npm run build` to generate the **build** folder.

## Local Server

- Specific information about the local server can be found [HERE](docs/local-server.readme.md).

## Client Application

- Specific information about the application can be found [HERE](docs/app.readme.md).

## Start the App

There are a few scripts to launch the app depending on the environment and if you need to test end-points or not.\
These are all the commands available and what each of them does:

```
yarn local  (this will launch the server and start client in development mode)
yarn dev  (this will launch the server and start client in development mode with production end-points)
yarn prod  (this will launch the server and start client in production mode)
yarn client:local  (this will start the client in development mode)
yarn client:dev  (this will start the client in development mode with client end-point http)
yarn client:prod  (this will launch the server, generate a build and start the app from that build in production)
```

**NOTE:** If your using npm, just change `yarn` for `npm run`.

## Testing

Testing is done with Jest and Enzyme with [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing) ideology.\
To run the tests in the app and display a coverage report just use this command:

```
yarn test-client or npm run test-client
```

All end-point response mocks should be stored in the "mock" folder of the app and managed through the local server of this app.

The files that handle the test configuration are:

- [jest.config.js](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/jest.config.js)
- [package.json](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/package.json)
- [setupTests.ts](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/src/setuptests.ts)

## Deployment

For the installation of platforms, you can change `yarn` with `npm run` in case you're using npm as your package manager.\
For the deployment, change `yarn` with `npx`.

### Installing the Platforms

1.- Generate a build with `yarn build`\
2.- Go into the client folder `cd client`\
3.- Install the iOS platform `yarn cap add ios`\
4.- Install ios platform native dependencies (this step is done every time the ios platform is installed)

```
cd ios/App  (where the podfile exists)
pod install
```

5.- Install the Android platform `yarn cap add android`.

**NOTE:** After installing the platforms, capacitor will add a folder called `.gradle` to the project. This folder should not be moved or modified.

### Deploying the Application

Deployment is done with Capacitor from the root folder. The process is as follows:

1.- Generate a build with `yarn build` from the root folder.

2.- Enter the client folder with `cd client`.

3.- `yarn cap sync` to updates dependencies and copy any web assets to the project.

**NOTE:** Alternativelly, if you don't need to update dependencies, just run `yarn cap copy` to copy the web assets only.

4.- Open the software to generate the deployment:

- `yarn cap open android` - This will open your installed version of Android Studio.
- `yarn cap open ios` - This will open your installed version of Xcode.

  5.- Generate the build on those software following these steps:

- For Android: [Deploy to Google Play](https://www.joshmorony.com/deploying-capacitor-applications-to-android-development-distribution/)
- For iOS: [Deploy to Apple Store](https://www.joshmorony.com/deploying-capacitor-applications-to-ios-development-distribution/)
