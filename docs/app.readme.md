# abb-terminal-insight

Application for managing driver's information, trucks load/unload status and geolocation.

## Table of Contents

- [Configuration](#configuration)
- [Start Client](#start-client)

## Configuration

### Capacitor

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

### Styled-components

The configuration and basic theme of the application is stored in the `theme` folder.
For more information check the documentation in their [website](https://www.styled-components.com/)

### Lint

Basic rules for the lint of this app are in the following files:

- [.eslintrc](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/.eslintrc)
- [.prettierrc](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/.prettierrc)
- [.prettierrcignore](https://github.com/sopraux/react-capacitor-seed/blob/master-seed-ts/client/.prettierignore)

## Start Client

The scripts in the `package.json` file have been modified to match all different environments.\
All these scripts are run from inside the /client folder.\
The root folder scripts make use of these to launch/build/test the application in order to prevent the developer to keep changing folders.

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
