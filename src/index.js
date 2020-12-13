import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todos from './todos'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #282c34;
    color: white;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router >
      <Switch>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
