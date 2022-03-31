import React from "react";
import ReactDOM from "react-dom";

import store from "@/store";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
