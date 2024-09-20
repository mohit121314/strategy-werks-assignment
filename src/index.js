import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import StrategyWerks from "./StrategyWerks";

ReactDOM.render(
  <Provider store={store}>
    <StrategyWerks />
  </Provider>,
  document.getElementById("root")
);