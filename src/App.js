import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

// pages
import Home from './pages/Home'
import SingleArticle from './pages/SingleArticle'
import Articles from './pages/Articles'
import SingleEvent from './pages/SingleEvent'
import Events from './pages/Events'
// import Forms from './pages/Forms'
// import Video from './pages/Video'
import Team from './pages/Team'
import Feedback from './pages/Feedback'
import Error from './pages/Error'
import Workshops from './pages/Workshops';
import SingleWorkshops from './pages/SingleWorkshops';
// import MemberWork from './pages/Member-Work';

// Components
import Header from './components/Header'
import Social from './components/Social'
import Footer from './components/Footer'
import Search from './components/Search/Search';
import ScrollButton from './components/ScrollButton';

import LoadingImg from './assets/images/logo.png'

function App() {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])

  if(loading){
    return(
      <div className="loadscreen">
        <img src={LoadingImg} className="logo mb-3" style={{display: "none"}} alt="" />
          <div className="loader-bubble loader-bubble-primary d-block"></div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Header />
      <ScrollButton />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={SingleArticle} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/events/:id" component={SingleEvent} />
        <Route exact path="/workshops" component={Workshops} />
        <Route exact path="/workshops/:id" component={SingleWorkshops} />
        {/* <Route exact path="/forms" component={Forms} />
        <Route exact path="/videos" component={Video} /> */}
        <Route exact path="/team" component={Team} />
        {/* <Route exact path="/member-work" component={MemberWork} /> */}
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