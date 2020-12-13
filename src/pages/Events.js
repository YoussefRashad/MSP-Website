import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { EventContext } from '../context/Events'
import Breadcrumb from '../components/Breadcrumb';

const EventsComponent = () => {

  const { events, loading } = useContext(EventContext)

  const showData = events.map((item, index) => {
    return (
      <div className="col-4" key={index}>
        <Link to={`/events/${item.idEvent}`} className="list-item" style={{ cursor: "pointer" }}>
          <div className="card o-hidden mb-4 d-flex">
            <div className="list-thumb d-flex">
              <img src={item.img} alt={item.header} />
            </div>
            <div className="flex-grow-1">
              <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                <div className="w-40 w-sm-100">
                  <div className="item-title" style={{ fontSize: 'large' }}>
                    {item.header}
                  </div>
                </div>
                <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                <p className="m-0 text-muted text-small w-15 w-sm-100">
                  {item.date}
                </p>
                <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  })

  console.log(events);
  return (
    <div className="d-flex flex-column msContant">
      <div className="msMain">
        <Breadcrumb title="Events" />
        {
          loading ? <h2>loading ...</h2> 
          :
            events.length === 0 ? <h2>no events to display</h2>
          :
          <div className="row">
            {showData}
            <div className="col-md-12 mt-3">
              pagination-controls
            </div>
          </div>
        }

      </div>
    </div>
  );
};

export default EventsComponent;