import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { EventContext } from '../context/Events'
import Pagination from '../components/Pagination';
import Breadcrumb from '../components/Breadcrumb';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import LoadingComponent from '../components/LoadingComponent';

const EventsComponent = () => {

  const { events, loading } = useContext(EventContext)
  const [page, setPage] = React.useState(1);
  
  React.useEffect(() => {
    scrollAutoFromBackToTop()
    return () => { }
  }, [page])

  const showData = () => {
    let start = (page - 1) * 6;
    let returnedData = [];
    for (let iter = start; iter < events.length && iter < start + 6; iter++) {
      returnedData.push(
        <div className="col-md-4 col-12 shadowItemWithoutBox" key={iter}>
          <Link to={`/events/${events[iter].idEvent}`} className="list-item" style={{ cursor: "pointer" }}>
            <div className="card o-hidden mb-4 d-flex">
              <div className="list-thumb d-flex">
                <img src={events[iter].img} alt={events[iter].title} />
              </div>
              <div className="flex-grow-1">
                <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                  <div className="w-80 w-sm-100">
                    <div className="item-title text-center" style={{ fontSize: 'large' }}>
                      {events[iter].title}
                    </div>
                  </div>
                  <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                  <p className="m-0 text-muted text-small w-15 w-sm-100">
                    {events[iter].created}
                  </p>
                  <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      )
    }
    return returnedData;
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
              <div className="row">
                <Pagination page={page} setPage={setPage} count={
                  events.length/6 > 1 ? Math.floor(events.length/6) : 0
                }  />
              </div>
              <div className="row">
                {showData()}
              </div>
              <div className="row">
                <Pagination page={page} setPage={setPage} count={
                    events.length/6  > 1 ? Math.floor(events.length/6) : 0
                }  />
              </div>
            </div>

        }

      </div>
    </div>
  );
};

export default EventsComponent;