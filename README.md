# R ❤️ React Demo application

The `r-react-demo` app demonstrates how to create a React application that uses R to process data server side. The app itself is pretty simple: square a number by a given exponent.

The app was built using the following tools.

- Frontend
  - [React](https://reactjs.org)
  - [Webpack](https://webpack.js.org)
- Backend
  - [Express](https://expressjs.com)
  - [r-script](https://github.com/fridgerator/r-script)

## Installation

Make sure [Node.js](https://nodejs.org/en/) is installed on your machine. (You may also use [Yarn](https://yarnpkg.com/en/)).

Clone this repository to your local machine.

```shell
git clone https://github.com/davidruvolo51/r-react-demo
```

Then, install the required dependencies. (You will need to do this in the root dir and in the `client` dir.)

```shell
cd r-react-demo
npm install

cd client
npm install
```

Once everything is installed, navigate back to the root directory and run the following command.

```shell
yarn dev
```

This will start the server at `localhost:5000` and the application at `localhost:8000`.

## Futher Reading

This application was built by piecing together a few blog posts. If you want to start from scratch, checkout out the [How to create a React frontend and a Node/Express backend and connect them](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/) post.
