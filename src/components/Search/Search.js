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
      }, 500);
    }else{
      setLoading(false)
    }
  }
  
  const getSize = ()=>{
    return TeamReselts.length + ArticleReselts.length + EventReselts.length + WorkshopReselts.length + SponserReselts.length;
  }


  const getAllResult = (allResults)=>{
    TeamReselts.map((item, index) =>
      allResults.push(
        <ShowTeam
          {...item}
          key={index}
        />
      )
    )

    ArticleReselts.map((item, index) =>
      allResults.push(
        <SearchItem
          title={item.title}
          author={item.author}
          img={item.img}
          created={item.created}
          id={item.id}
          overallRate={+item.overallRate}
          path={'articles'}
          key={index + TeamReselts.length}
        />
      )
    )

    EventReselts.map((item, index) =>
      allResults.push(
        <SearchItem
          title={item.title}
          location={item.location}
          img={item.img}
          created={item.created}
          id={item.id}
          path={'events'}
          key={index + TeamReselts.length + ArticleReselts.length}
        />
      )
    )

    WorkshopReselts.map((item, index) =>
      allResults.push(
        <SearchItem
          title={item.title}
          description={item.description}
          img={item.img}
          created={item.created}
          id={item.id}
          path={'workshops'}
          key={index + TeamReselts.length + ArticleReselts.length + EventReselts.length}
        />
      )
    )

    SponserReselts.map((item, index) =>
      allResults.push(
        <ShowSponser
          {...item}
          path={'sponsers'}
          key={index + TeamReselts.length + ArticleReselts.length + EventReselts.length + WorkshopReselts.length}
        />
      )
    )
  }

  const showDataInPaginationOrder = ()=>{
    let start = (page - 1) * noOfItemsInPage;
    let allResults = [];
    let returnedData = [];

    getAllResult(allResults)

    for (let index = start; index < allResults.length && index < start + noOfItemsInPage; index++) {
      returnedData.push(
        allResults[index]
      )
    }
    console.log(returnedData);
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


      {
        getSize() ? getPagination() : ''
      }
      <div className="search-results list-horizontal">
        {showDataInPaginationOrder()}
      </div>
      {
        getSize() ? getPagination() : ''
      }

    </div>
  );
};

export default Search;