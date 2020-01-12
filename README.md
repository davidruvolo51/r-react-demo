# R, Node, and React Demo application

This application is an example developing an React application and processing data in the R environment. The client is built using [React](https://reactjs.org). The flow of data is handled by [express.js](https://expressjs.com) and processed in R using [r-script](https://github.com/fridgerator/r-script) before being sent to the client.

The application is simple in functionality, but it demonstrates the flow of data. The purpose of the app is square a number from 1 to 100 by an exponent (between 2 and 10). These values are passed to the server (via an express api `/data`) and evaluate by: an R script (`R/index.R`) and using javascript function (for illustration purposes only). The result is sent to the client into the component's state and rendered below the form.

This setup may be useful for integrating familiar data handling practices in the R environment or for conducting analysis using R packages. 

## Installation

Make sure the following tools are installed.

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

## Get Started

To get started, clone this repository to your local machine. Then, install the required packages using `yarn` (the examples that I used to get this application running used yarn). Install the packages in the root directory and then in src.

```bash
cd r-react-demo/
yarn install

cd src
yarn install
```

Once everything is installed, you can start the application. In the root directory, run the following command.

```bash
yarn dev
```

This will start the development server at `localhost:3000`.

## Futher Reading

This application was built by piecing together a few blog posts. If you want to start from scratch, see the following posts. 

- [How to create a React frontend and a Node/Express backend and connect them](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/)
- [r-rscript](https://www.npmjs.com/package/@fridgerator/r-script)