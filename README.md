
# R, Node, and React Demo application

This application is an example developing an React application and processing data in the R environment. The client is built using [React](https://reactjs.org). The flow of data is handled by [express.js](https://expressjs.com) and processed in R using [r-script](https://github.com/fridgerator/r-script) before being sent to the client.

The application is simple in functionality, but it demonstrates the flow of data. The purpose of the app is square a number from 1 to 100 by an exponent (between 2 and 10). These values are passed to the server (via an express api `/data`) and evaluate by: an R script (`R/index.R`) and using javascript function (for illustration purposes only). The result is sent to the client into the component's state and rendered below the form.

This setup may be useful for integrating familiar data handling practices in the R environment or for conducting analysis using R packages. 

## Installation

Make sure the following tools are installed.

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)
- [npm](https://www.npmjs.com/get-npm)

## Get Started

To get started, clone this repository. To run the application, type the following command in the root directory.

```bash
yarn dev
```

Doing so will also install the require node packages. You may want to install everything first. If that is the case, run `npm install` in both the root directory and then in client directory.

## Futher Reading

If you want to start fresh with a new application, I used the following tutorial to set up the application: [How to create a React frontend and a Node/Express backend and connect them](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)

See the `r-script` [documentation](https://www.npmjs.com/package/@fridgerator/r-script) to learn how to integrate R. 