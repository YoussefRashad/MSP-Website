import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import { UserContext } from './context/User' 
import { TIME_LOADING } from './utils/URL'

// pages
import Home from './pages/Home'
import Articles from './pages/Articles'
import SingleArticle from './pages/SingleArticle'
import Events from './pages/Events'
import SingleEvent from './pages/SingleEvent'
import Forms from './pages/Forms'
import Video from './pages/Videos'
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

// Dashboards
import ManageArticles from './pages/Dashboards/ManageArticles'
import ManageEvents from './pages/Dashboards/ManageEvents'
import ManageWorkshops from './pages/Dashboards/ManageWorkshops'
import ManageForms from './pages/Dashboards/ManageForms'
import ManageTeam from './pages/Dashboards/ManageTeam'
import ManageVideos from './pages/Dashboards/ManageVideos'
import ManageSponsors from './pages/Dashboards/ManageSponsors'



import LoadingImg from './assets/images/MSP/essential/logo.png'
import Alert from './components/Alert';

function App() {
  const [loading, setLoading] = React.useState(true) //// i will change to admin loading
  const { alert, higherLoading, setHigherLoading, isAdmin } = React.useContext(UserContext)
  
  React.useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
      setHigherLoading(false)
    }, TIME_LOADING);
  },[])

  if (loading || higherLoading){
    return(
      <div className="loadscreen">
        <img src={LoadingImg} className="logo mb-3" alt="loading ..." />
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

        {/* Dashboards */}
        {
          isAdmin &&
            <>
              <Route exact path="/manage/articles" component={ManageArticles} />
              <Route exact path="/manage/workshops" component={ManageWorkshops} />
              <Route exact path="/manage/events" component={ManageEvents} />
              <Route exact path="/manage/forms" component={ManageForms} />
              <Route exact path="/manage/team" component={ManageTeam} />
              <Route exact path="/manage/videos" component={ManageVideos} />
              <Route exact path="/manage/sponsors" component={ManageSponsors} />
          </>
        }
        <Route path="*" component={Error} />
      </Switch>

      <Social />
      <Footer />
    </BrowserRouter>
  );
}

export default App;