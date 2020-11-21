import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

// pages
import Home from './pages/Home'
import Article from './pages/Article'
import Articles from './pages/Articles'
import Forms from './pages/Forms'
import Video from './pages/Video'
import Topic from './pages/Topic'
import About from './pages/About'
import Feedback from './pages/Feedback'
import Error from './pages/Error'

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
        <Route exact path="/articles/:id" component={Article} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/videos" component={Video} />
        <Route exact path="/topic" component={Topic} />
        <Route exact path="/about" component={About} />
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