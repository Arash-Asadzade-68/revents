import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import "./index.css";
import App from "./app/layout/App";
import ScrollToTop from './app/common/util/ScrollToTop'
import { configureStore } from "./app/store/configureStore";


const store = configureStore();

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
    </Provider>,

    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}
render();
