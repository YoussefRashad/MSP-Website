import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

// pages
import Home from './pages/Home'
import SingleArticle from './pages/SingleArticle'
import Articles from './pages/Articles'
import SingleEvent from './pages/SingleEvent'
import Events from './pages/Events'
import Forms from './pages/Forms'
import Video from './pages/Video'
import About from './pages/Team'
import Feedback from './pages/Feedback'
import Error from './pages/Error'
import Workshops from './pages/Workshops';
import SingleWorkshops from './pages/SingleWorkshops';

// Components
import Header from './components/Header'
import Social from './components/Social'
import Footer from './components/Footer'
import Search from './components/Search';

/*
  <div class="module-loader" >
    <div class="spinner spinner-bubble spinner-bubble-primary mr-3"></div>
  </div>
*/

function App() {
  return (
    <BrowserRouter>
    
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={SingleArticle} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:id" component={SingleEvent} />
        <Route exact path="/workshops" component={Workshops} />
        <Route exact path="/workshops/:id" component={SingleWorkshops} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/videos" component={Video} />
        <Route exact path="/team" component={About} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/search" component={Search} />
        <Route path="*" component={Error} />
      </Switch>

      <Social />
      <Footer />
    </BrowserRouter>
  );
}

export default App;