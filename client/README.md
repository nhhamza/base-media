# abb-terminal-insight

Application for managing driver's information, trucks load/unload status and geolocation.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Start the App](#start-the-app)
- [Testing](#testing)
- [Deployment](#deployment)

## Introduction

This project is using the following technologies:

- [reactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Capacitor](https://capacitor.ionicframework.com) as a device building technology.
- [Apache Cordova](https://cordova.apache.org/) for mobile integration plugins.
- Styles generated with [Sass](http://sass-lang.com/) and [Styled-Components](https://www.styled-components.com/)
- [Prettier](https://prettier.io/) with [ESlint](https://eslint.org/) and [Stylelint](https://stylelint.io/user-guide/cli) for stable code formatting.
- Unit tests with [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/)

## Prerequisites

1.- Install [Node.js](http://nodejs.org) version 12.10.x or higher

- (optional) In OSX use [homebrew](http://brew.sh) `brew install node` or download the DMG from [nodejs](https://nodejs.org/es/)
- (optional) In Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

For different versions of node, it is possible to use [Node Version Manager](https://github.com/creationix/nvm)

2.- Development environment for iOS:

- Install the latest version of [Xcode](https://developer.apple.com/xcode/) (currently v11.0)
- Install [CocoaPods](https://cocoapods.org/) `sudo gem install cocoapods` in your system as global.

  3.- Development for Android:

- Install the latest version of [Android Studio](https://developer.android.com/studio) (currently v3.5.1)

## Installation

To install the server just follow these steps:

```
git clone https://github.com/sopraux/abb-terminal-insight.git
cd abb-terminal-insight
yarn global add cordova  or  npm install -g cordova
cordova -v  (version should be 9.0.0 or higher. You might need to close and reopen your terminal)
yarn or npm install  (to install the local server dependencies)
cd ..
```

It is recommended to run `yarn build` or `npm run build` to generate the **build** folder.

## Start the App

There are a few scripts to launch the app depending on the environment and if you need to test end-points or not.
These are all the commands available and what each of them does:

```
yarn start:local  (launch the app in the development mode with localhost end-points)
yarn start:dev  (launch the app in the development mode with client end-points)
yarn build  (generate a build of the application with client end-points for production)
yarn test  (this will run the tests in the application)
yarn code:lint (this will run the lint tests)
yarn stylelint:check  (this will check for lint errors in the scss files)
yarn stylelint:fix  (this will look for lint errors and fix them if possible in the css files)
yarn eject  (this will uncompress what's inside of react-scripts)
```

**NOTE:** If your using npm, just change `yarn` for `npm run`.

## Testing

Testing is done with Jest and Enzyme with [Snapshot Testing](https://jestjs.io/docs/en/snapshot-testing) ideology.
To run the tests in the app and display a coverage report just use this command:

```
yarn test or npm run test
```

All end-point response mocks should be stored in the "mock" folder of the app and managed through the local server of this app.

The files that handle the test configuration are:

- [jest.config.js](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/jest.config.js)
- [package.json](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/package.json)
- [setupTests.ts](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/src/setupTests.ts)

## Deployment

For the installation of platforms, you can change `yarn` with `npm run` in case you're using npm as your package manager.
For the deployment, change `yarn` with `npx`.

### Installing the Platforms

1.- Generate a build with `yarn build`\
2.- Install the iOS platform `yarn cap add ios`\
3.- Install ios platform native dependencies (this step is done every time the ios platform is installed)

```
cd ios/App  (where the podfile exists)
pod install
```

4.- Install the Android platform `yarn cap add android`.

**NOTE:** After installing the platforms, capacitor will add a folder called `.gradle` to the project. This folder should not ver moved or modified.

### Capacitor configuration

It exists in the `capacitor.config.json` file. This is the basic configuration:

```
{
  "appId": "com.soprasteria.reactCapacitorSeed",
  "appName": "React Capacitor Jest Seed",
  "bundledWebRuntime": false,
  "npmClient": "yarn",
  "webDir": "build",
  "android": {
    "backgroundColor": "#ffffffff",
    "allowMixedContent": true,
    "captureInput": true,
    "webContentsDebuggingEnabled": true
  },
  "ios": {
    "backgroundColor": "#ffffffff",
    "cordovaSwiftVersion": "3.0",
    "minVersion": "10.0",
    "cordovaLinkerFlags": ["-ObjC"]
  }
}
```

If you're using npm as your package manager, change "npmClient" to look like this:

```
"npmClient": "npm"
```

If after the build, your folder is not called "build", change "webDir" value to match your file name.

The file has specific configuration for the different builds, update it to match the project necessities such as versions, background color and so on and so forth.

More information about how to configure capacitor can be found [HERE](https://capacitor.ionicframework.com/docs/basics/configuring-your-app/).

### Styled-components configuration

The configuration and basic theme of the application is stored in the `theme` folder.
For more information check the documentation in their [website](https://www.styled-components.com/)

### Deploying the Application

Deployment is done with Capacitor from the root folder. The process is as follows:

1.- Generate a build with `yarn build`.

2.- `yarn cap sync` to updates dependencies and copy any web assets to the project.

**NOTE:** Alternativelly, if you don't need to update dependencies, just run `yarn cap copy` to copy the web assets only.

3.- Open the software to generate the deployment:

- `yarn cap open android` - This will open your installed version of Android Studio.
- `yarn cap open ios` - This will open your installed version of Xcode.

  4.- Generate the build on those software following these steps:

- For Android: [Deploy to Google Play](https://www.joshmorony.com/deploying-capacitor-applications-to-android-development-distribution/)
- For iOS: [Deploy to Apple Store](https://www.joshmorony.com/deploying-capacitor-applications-to-ios-development-distribution/)
