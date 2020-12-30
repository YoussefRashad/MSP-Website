import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { EventContext } from '../context/Events'
// import Pagination from './Pagination';
import Breadcrumb from './Breadcrumb';
import LoadingComponent from './LoadingComponent';
import { scrollAutoFromBackToTop } from './ScrollButton';

const EventsComponent = () => {

  const { featureEvents,  loading } = useContext(EventContext)
  React.useEffect(() => {
    scrollAutoFromBackToTop()
    return () => { }
  }, [])


  const showData = featureEvents.map((item, index) => {
    return (
      <div className="col-md-4 col-12 shadowItemWithoutBox" key={index}>
        <Link to={`/events/${item.idEvent}`} className="list-item" style={{ cursor: "pointer" }}>
          <div className="card o-hidden mb-4 d-flex">
            <div className="list-thumb d-flex">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="flex-grow-1">
              <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                <div className="w-80 w-sm-100">
                  <div className="item-title text-center" style={{ fontSize: 'large' }}>
                    {item.title}
                  </div>
                </div>
                <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                <p className="m-0 text-muted text-small w-15 w-sm-100">
                  {item.created}
                </p>
                <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  })

  return (
    <div className="d-flex flex-column msContant">
      <div className="msMain">
        <Breadcrumb title="Events" />
        {
          loading ? <LoadingComponent />
          :
            featureEvents.length === 0 ? <h2>no events to display</h2>
          :
            <div className="row">
              {showData}
            </div>

        }

      </div>
    </div>
  );
};

export default EventsComponent;