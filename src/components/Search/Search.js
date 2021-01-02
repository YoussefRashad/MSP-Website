import React from 'react';
import { useHistory } from 'react-router-dom'
import Logo from "../../assets/images/MSP/essential/logo.png"

import { ArticleContext } from '../../context/Articles'
import { EventContext } from '../../context/Events'
import { SponserContext } from '../../context/Sponsers'
import { TeamContext } from '../../context/Teams'
import { WorkshopContext } from '../../context/Workshops'

import SearchItem from './SearchItem';
import ShowSponser from './ShowSponser';
import ShowTeam from './ShowTeam';
import LoadingComponent from '../LoadingComponent'
import Pagination from '../Pagination';
import { scrollAutoFromBackToTop } from '../ScrollButton';

const Search = () => {
  const history = useHistory();

  const [searchTerm, setSearchTerm] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // search results
  const [TeamReselts, setTeamReselts] = React.useState([]);
  const [ArticleReselts, setArticleReselts] = React.useState([]);
  const [EventReselts, setEventReselts] = React.useState([]);
  const [WorkshopReselts, setWorkshopReselts] = React.useState([]);
  const [SponserReselts, setSponserReselts] = React.useState([]);

  // Data from ContextAPI 
  const { getMembersByTerm } = React.useContext(TeamContext)
  const { getArticlesByTerm } = React.useContext(ArticleContext)
  const { getEventsByTerm } = React.useContext(EventContext)
  const { getWorkshopsByTerm } = React.useContext(WorkshopContext)
  const { getSponsersByTerm } = React.useContext(SponserContext)

  // for pagination
  const [page, setPage] = React.useState(1);
  const noOfItemsInPage = 6;

  // to scroll up
  React.useEffect(() => {
    scrollAutoFromBackToTop()
    return () => { }
  }, [page])

  const getPagination = () => {
    return (
      <div className="row">
        <Pagination page={page} setPage={setPage} count={
          getSize() / noOfItemsInPage > 1 ? Math.floor(getSize() / noOfItemsInPage) : 0
        } />
      </div>
    );
  }

  // Searching
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


  /// I will work on it
  const showDataInPaginationOrder = ()=>{
    let start = (page - 1) * noOfItemsInPage;
    let returnedData = [];
    for (let index = start; index < getSize() && index < start + noOfItemsInPage; index++) {
      returnedData.push(
        
      )
    }
    return returnedData
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


      {getPagination()}
      <div className="search-results list-horizontal">
        {
          // Team >> name, word, season, position, img
          TeamReselts.map((memberItem, index) => <ShowTeam {...memberItem} key={index} />)
        }

        {
          // Article >> title, author, img
          ArticleReselts.map((articleItem, index) =>
            <SearchItem
              title={articleItem.title}
              author={articleItem.author}
              img={articleItem.img}
              created={articleItem.created}
              id={articleItem.id}
              overallRate={+articleItem.overallRate}
              path={'articles'}
              key={index}
            />
          )
        }

        {
          // Event >> title, location, img
          EventReselts.map((eventItem, index) =>
            <SearchItem
              title={eventItem.title}
              location={eventItem.location}
              img={eventItem.img}
              created={eventItem.created}
              id={eventItem.id}
              path={'events'}
              key={index}
            />
          )
        }

        {
          // Workshop >> title, img
          WorkshopReselts.map((workshopItem, index) =>
            <SearchItem
              title={workshopItem.title}
              description={workshopItem.description}
              img={workshopItem.img}
              created={workshopItem.created}
              id={workshopItem.id}
              path={'workshops'}
              key={index}
            />
          )
        }

        {
          // Sponser >> name, img
          SponserReselts.map((sponserItem, index) =>
            <ShowSponser
              {...sponserItem}
              path={'sponsers'}
              key={index}
            />
          )
        }
      </div>
      {getPagination()}

    </div>
  );
};

export default Search;

