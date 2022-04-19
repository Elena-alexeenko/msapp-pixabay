import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./web/components/App/App";
import { Provider } from "react-redux";
import store from "./web/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
