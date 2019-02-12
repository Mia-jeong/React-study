import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

/****
    react-router        : Core navigation lib - we don't install this manually
    react-router-dom    : Navigation from dom-based apps (we want this!)
    react-router-native : Navigation for react-native apps
    react-router-redux  : Bindings between Redux and React Router (not necessary)

 */

//extension to debug redux
//github.com/zalmoxisus/redux-devtools-extension

//install redux from
//npm install --save redux-form

//redux form documentation
//http://redux-form.com/
