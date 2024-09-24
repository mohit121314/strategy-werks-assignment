import React from "react";
import ReactDOM from "react-dom";
import StrategyWerks from "./components/StrategyWerks/StrategyWerks";
import Header from "./components/Header/Header";
import "./App.scss";

ReactDOM.render(
  <div className="app">
    <Header />
    <StrategyWerks />
  </div>
  ,
  document.getElementById("root")
);