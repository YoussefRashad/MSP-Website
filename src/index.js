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
import UserProvider from "./context/User"
import ArticleProvider from "./context/Articles";
import EventProvider from "./context/Events";
import SponsorProvider from "./context/Sponsors";
import TeamProvider from "./context/Teams";
import WorkshopProvider from "./context/Workshops";
import VideoProvider from "./context/Videos"

import LoadingImg from './assets/images/MSP/essential/logo.png'
let loading = true;

if(loading){
  ReactDOM.render(
    <div className="loadscreen">
      <img src={LoadingImg} className="logo mb-3" alt="Loading ..." />
      <div className="loader-bubble loader-bubble-primary d-block"></div>
    </div>,
    document.getElementById('root')
  )
}

window.onload = function (){
  loading = false;
  ReactDOM.render(
    <UserProvider>
      <ArticleProvider>
        <EventProvider>
          <SponsorProvider>
            <TeamProvider>
              <WorkshopProvider>
                <VideoProvider>
                  {window.onload = <App />}
                </VideoProvider>
              </WorkshopProvider>
            </TeamProvider>
          </SponsorProvider>
        </EventProvider>
      </ArticleProvider>
    </UserProvider>,
    document.getElementById('root')
  );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
