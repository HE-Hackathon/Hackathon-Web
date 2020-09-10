import React from "react";
import ReactDOM from "react-dom";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import MomentUtils from '@date-io/moment';
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import App from './App';
import { createStore } from 'redux';
import allReducer from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store = {store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <App/>
    </MuiPickersUtilsProvider>
  </Provider>
  ,
  document.getElementById("root")
);
