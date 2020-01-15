# # abb-terminal-insight (Server)

A local server to simulate end-point calls for mocking purposes.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Engines](#engines)
- [Start](#start-the-server)
- [Routing](#routing)

## Prerequisites

1.- [nodemon](https://nodemon.io/) for testing `development` end-points.\
2.- [serve](https://www.npmjs.com/package/serve) for testing `production` end-points.

**NOTE:** Both should be already installed in your computer if you followed the [Installation section](https://github.com/sopraux/abb-app-journey). If not, check it out before continuing.

## Engines

To update the nodejs and npm versions in the server, a change in the package.json of the server is needed.

```
"engines": {
  "node": YOUR_NODE_VERSION,   (ex. "12.10.0")
  "npm": YOUR_NPM_VERSION      (ex. "6.10.3")
},
```

Find the block named `engines` in the file and set each element inside to the version you're using on this project.
The ones in the example are the minimum version this app requires to work.

## Start the server

The scripts in the `package.json` file have been modified to match all different environments.\
The scripts specifically for server only are:

```
yarn server  (this will launch the server with nodemon for development)
yarn start  (this will launch the server with node for a static server with no watcher)
```

**NOTE:** If your using npm, just change `yarn` for `npm run`.

## Routing

To test end-points, those must be added to the server.js file. A simple **GET** request would looks like this:

```
app.get('/MY_END_POINT', (req, res) => {
  // manage data or headers if needed

  if (req.body.MY_SEND_VALUE) {
    res.status(200).send(SUCCESS_OBJECT);
  } else {
    res.status(500).send(ERROR_OBJECT);
  }
});
```

**NOTE:** the variable `app` is created in the server.js file with this command `const app = express();`

For more information about how Routing works, check [ExpressJS Routing guide](https://expressjs.com/en/guide/routing.html)
