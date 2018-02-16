import React from "react";
import ReactDOM from "react-dom";
import App from "components/app";
import { getTransactions } from "./shared/linelosApiService";
import "./index.css";

const fetchData = () => {
  getTransactions()
    .then(t => renderApp(t))
    .catch(e => renderApp([]));
};

const renderApp = transactions => {
  ReactDOM.render(
    <App transactions={transactions} fetchDataEvent={fetchData} />,
    document.getElementById("root")
  );
};

renderApp([]);
