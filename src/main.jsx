import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

//Routing
import { BrowserRouter } from "react-router-dom";

//Util
import ScrollToTop from "./utils/scrollToTop/ScrollToTop.jsx";
import SmoothScrolling from "./utils/smoothScrolling/SmoothScrolling.jsx";

//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Provider store={store}>
          <SmoothScrolling>
            <App />
          </SmoothScrolling>
        </Provider>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
