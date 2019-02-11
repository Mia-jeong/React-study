import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers);
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
