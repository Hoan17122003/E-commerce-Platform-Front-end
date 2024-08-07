import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import reportWebVitals from "./reportWebVitals";
// import GlobalStyles from "./Components/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
/* <GlobalStyles>
</GlobalStyles> */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
