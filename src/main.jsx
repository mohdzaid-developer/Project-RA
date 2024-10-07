import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

//Routing
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import ScrollToTop from "./utils/scrollToTop/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
