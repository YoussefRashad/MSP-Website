import React from 'react';
import { useHistory } from 'react-router-dom'
import Logo from "../../assets/images/MSP/essential/logo.png"

import { ArticleContext } from '../../context/Articles'
import { EventContext } from '../../context/Events'
import { SponserContext } from '../../context/Sponsers'
import { TeamContext } from '../../context/Teams'
import { WorkshopContext } from '../../context/Workshops'

import ShowArticle from './ShowArticle';
import ShowEvent from './ShowEvent';
import ShowSponser from './ShowSponser';
import ShowTeam from './ShowTeam';
import ShowWorkshop from './ShowWorkshop';
import LoadingComponent from '../LoadingComponent'

const Search = () => {
  const history = useHistory();

  const [TeamReselts, setTeamReselts] = React.useState([]);
  const [ArticleReselts, setArticleReselts] = React.useState([]);
  const [EventReselts, setEventReselts] = React.useState([]);
  const [WorkshopReselts, setWorkshopReselts] = React.useState([]);
  const [SponserReselts, setSponserReselts] = React.useState([]);

  const [searchTerm, setSearchTerm] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { getMembersByTerm } = React.useContext(TeamContext)
  const { getArticlesByTerm } = React.useContext(ArticleContext)
  const { getEventsByTerm } = React.useContext(EventContext)
  const { getWorkshopsByTerm } = React.useContext(WorkshopContext)
  const { getSponsersByTerm } = React.useContext(SponserContext)


  React.useEffect(() => {
    setLoading(true);
    
    setTeamReselts(getMembersByTerm(searchTerm));
    setArticleReselts(getArticlesByTerm(searchTerm))
    setEventReselts(getEventsByTerm(searchTerm))
    setWorkshopReselts(getWorkshopsByTerm(searchTerm))
    setSponserReselts(getSponsersByTerm(searchTerm))

    if(!searchTerm){
      setTeamReselts([]); 
      setArticleReselts([]); 
      setEventReselts([])
      setWorkshopReselts([])
      setSponserReselts([])
    }

  }, [searchTerm]);

  if(loading){
    if(searchTerm){
      setTimeout(() => {
        setLoading(false)
      }, 800);
    }else{
      setLoading(false)
    }
  }
  
  const getSize = ()=>{
    return TeamReselts.length + ArticleReselts.length + EventReselts.length + WorkshopReselts.length + SponserReselts.length;
  }


  return (
    // animate
    <div className="search-ui rtl-ps-none">
      <div className="search-header">
        <img src={Logo} alt="MSP Tech Club" className="logo" />
        <button className="btn btn-icon bg-transparent float-right mt-2" onClick={()=>history.goBack()}>
          <i className="i-Close-Window text-40 text-muted"></i>
        </button>
      </div>

      <input
        type="text"
        placeholder="Type here"
        className="search-input"
        autoFocus
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
      />

      <div className="search-title">
        <span className="text-muted" style={{ fontSize: 'xx-large' }}>
          {loading ? <LoadingComponent /> : getSize() > 0 ? 'Search results' : ''}
        </span>
      </div>

      <div className="search-results list-horizontal">
        {
          // Team >> name, word, season, position, img
          TeamReselts.map((memberItem, index) => <ShowTeam {...memberItem} key={index} /> )
        }

        {
          // Article >> title, description, author, img
          ArticleReselts.map((articleItem, index) => <ShowArticle {...articleItem} key={index} /> )
        }

        {
          // Event >> title, description, location, img
          EventReselts.map((eventItem, index) => <ShowEvent {...eventItem} key={index} /> )
        }

        {
          // Workshop >> title, description, img
          WorkshopReselts.map((workshopItem, index)=><ShowWorkshop {...workshopItem} key={index}/>)
        }

        {
          // Sponser >> name, img
          SponserReselts.map((sponserItem, index) => <ShowSponser {...sponserItem} key={index} /> )
        }

      </div>

    </div>
  );
};

export default Search;

