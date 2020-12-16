import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
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

ReactDOM.render(
  <ArticleProvider>
    <EventProvider>
      <SponserProvider>
        <TeamProvider>
          <WorkshopProvider>
            <App />
          </WorkshopProvider>
        </TeamProvider>
      </SponserProvider>
    </EventProvider>
  </ArticleProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
