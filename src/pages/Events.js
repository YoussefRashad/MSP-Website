import React, { useContext } from 'react';

import { EventContext } from '../context/Events'
import Pagination from '../components/Pagination';
import Breadcrumb from '../components/Breadcrumb';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import LoadingComponent from '../components/LoadingComponent';
import ShowCard from '../components/ShowCard';

const EventsComponent = () => {

  const { events, loading } = useContext(EventContext)
  const [page, setPage] = React.useState(1);
  const noOfItemsInPage = 6;
  
  React.useEffect(() => {
    scrollAutoFromBackToTop()
    return () => { }
  }, [page])


  const getPagination = ()=>{
    return(
      <div className="row">
        <Pagination page={page} setPage={setPage} count={
          events.length / noOfItemsInPage > 1 ? Math.floor(events.length / noOfItemsInPage) : 0
        } />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column msContant">
      <div className="msMain">
        <Breadcrumb title="Events" />
        {
          loading ? <LoadingComponent />
          :
            events.length === 0 ? <h2>no events to display</h2>
          :
            <div>
              {getPagination()}
              <div className="row">
                  {
                    <ShowCard
                      page={page}
                      noOfItemsInPage={noOfItemsInPage}
                      cards={events}
                      path={'events'}
                    />
                  }
              </div>
              {getPagination()}
            </div>

        }

      </div>
    </div>
  );
};

export default EventsComponent;