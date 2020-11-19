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
import NotFound from './pages/Not-Found'

// Components
import Header from './components/Header'
import Social from './components/Social'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/video" component={Video} />
        <Route exact path="/topic" component={Topic} />
        <Route exact path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>

      <Social />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
