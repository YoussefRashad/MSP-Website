import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { TIME_LOADING } from './utils/URL'

// pages
import Home from './pages/Home'
import Articles from './pages/Articles'
import SingleArticle from './pages/SingleArticle'
import Events from './pages/Events'
import SingleEvent from './pages/SingleEvent'
import Forms from './pages/Forms'
import Video from './pages/Video'
import SingleVideo from './pages/SingleVideo'
import Team from './pages/Team'
import Feedback from './pages/Feedback'
import Error from './pages/Error'
import Workshops from './pages/Workshops';
import SingleWorkshops from './pages/SingleWorkshops';
import Login from './pages/Login'
import MyProfile from './pages/Profile'
// import MemberWork from './pages/Member-Work';

// Components
import Header from './components/Header'
import Social from './components/Social'
import Footer from './components/Footer'
import Search from './components/Search/Search';
import ScrollButton from './components/ScrollButton';

import LoadingImg from './assets/images/MSP/essential/logo.png'
import Alert from './components/Alert';

import { UserContext } from './context/User' 
function App() {
  const [loading, setLoading] = React.useState(true) //// i will change to admin loading
  const { alert } = React.useContext(UserContext)
  
  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, TIME_LOADING);
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
      {alert.show && <Alert />}
      
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
        <Route exact path="/videos/:id" component={SingleVideo} />
        <Route exact path="/team" component={Team} />
        {/* <Route exact path="/member-work" component={MemberWork} /> */}
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={MyProfile} />
        <Route path="*" component={Error} />
      </Switch>

      <Social />
      <Footer />
    </BrowserRouter>
  );
}

export default App;