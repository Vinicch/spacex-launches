# Introduction

This is a project that shows the SpaceX launches stats since its inception,
using the SpaceX API available in the [documentation site](https://docs.spacexdata.com/)

## Scripts

In each of the two starting folders, you can run `yarn install` to install their dependencies.

## Development mode

To start the dev server, from the project directory, you can go to the server folder with `cd server` and run:

### `yarn dev`

Runs the app in development mode. <br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you edit the files.<br/>
You will also see errors in the console.

### `yarn client`

Runs the client side of the app in development mode. <br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you edit the files.<br/>
You will also see errors in the console.

### `yarn server`

Runs the server side of the app using `nodemon`.
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to access the GraphQL playground in the browser.

The server will restart if you edit .js files.<br/>
You will also see errors in the console.

## Production mode

To run the app in production mode or build it for deployment, you can go to the client's package.json and add the following line:

`"proxy": "http://localhost:4000"`

Go to `client/src/App.js` and remove the uri, leaving only `/graphql` as the value.

Then, from the project directory, you can run `cd client` and run:

### `yarn build`

Creates the client side production build.

Go to `server/index.js` and uncomment the commented code to be able to use the production build.

You can go to the server folder by running `cd ../server` and run the final command:

### `yarn start`

Starts the Node.js server using the production build static files.
Open [http://localhost:4000](http://localhost:4000) to view the production build of the app in the browser.

You are now ready to use the app :)
