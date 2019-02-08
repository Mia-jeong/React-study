import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

/*
redux   : The redux library
react-redux : Integration layer between react and redux
axios : Helps us make network requests
redux-thunk : Middleware to help us make requests in a redux application

npm install --save redux react-redux axios redux-thunk
*/
