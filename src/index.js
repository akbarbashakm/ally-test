import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { LastLocationProvider } from "react-router-last-location";
import thunk from 'redux-thunk';
import './index.scss'


const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const AppBundle = (
  <Provider store={store}>
    <BrowserRouter>
      <LastLocationProvider>
        <App />
      </LastLocationProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(AppBundle, document.getElementById("root"));
