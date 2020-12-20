import React from 'react';
import ReactDOM from 'react-dom';

/* Bootstrap 4 */
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery'
import 'popper.js'
import "bootstrap/dist/js/bootstrap.bundle.min";
/* End Bootstrap 4 */

import './assets/styles/app/_app.scss'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// context API
import ArticleProvider from "./context/Articles";
import EventProvider from "./context/Events";
import SponserProvider from "./context/Sponsers";
import TeamProvider from "./context/Teams";
import WorkshopProvider from "./context/Workshops";

import LoadingImg from './assets/images/MSP/essential/logo.png'
let loading = true;

if(loading){
  ReactDOM.render(
    <div className="loadscreen">
      <img src={LoadingImg} className="logo mb-3" style={{ display: "none" }} alt="" />
      <div className="loader-bubble loader-bubble-primary d-block"></div>
    </div>,
    document.getElementById('root')
  )
}

window.onload = function (){
  loading = false;
  ReactDOM.render(
    <ArticleProvider>
      <EventProvider>
        <SponserProvider>
          <TeamProvider>
            <WorkshopProvider>
              {window.onload = <App />}
            </WorkshopProvider>
          </TeamProvider>
        </SponserProvider>
      </EventProvider>
    </ArticleProvider>,
    document.getElementById('root')
  );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
