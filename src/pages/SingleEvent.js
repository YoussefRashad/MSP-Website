import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { EventContext } from "../context/Events";

import Img from '../assets/images/products/speaker-1.jpg'
import { scrollAutoFromBackToTop } from '../components/ScrollButton';

function EventComponent() {
  const [event, setEvent] = useState(undefined)
  const [loading, setLoading] = useState(false)
  const { getEvents } = useContext(EventContext)
  const {id} =  useParams()

  useEffect(() => {
    setLoading(true);
    const event = getEvents(id)
    setEvent(event)
    setLoading(false)
    return () => {}
  })
  
  React.useEffect(() => {
    scrollAutoFromBackToTop()
    return () => { }
  }, [])

  const showData = ()=>{
    return(
      <div className="card user-profile o-hidden mb-4">
        <div>
          <img src={`http://localhost:3000/${event.img}`} width="100%" alt="Event Logo" />
        </div>

        <div className="user-info">
          <p className="m-0 text-24" style={{ paddingTop: '30px' }}>
            {' '}
          </p>
          <p className="text-muted m-0" style={{ paddingTop: '30px' }}>
            {' '}
          </p>
        </div>
        <div className="card-body">
          <div>
            <h2 style={{ fontSize: '40px', fontFamily: 'Cairo, sans-serif' }} className="text-center">
              {event.title}
            </h2>

            <div className="msPar">
              {event.description}
            </div>
            <hr />
            <div className="row">
              <div style={{ fontSize: 'x-large' }}>
                <div className="mb-4">
                  <p className="text-primary mb-1">
                    <i className="i-Calendar text-16 mr-1"></i>Date
                    </p>
                  <span>{event.created}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column msContant">
      <div className="msMain">
        {
          loading ? <h2>loading ...</h2>
          :
            !event ? <h2 className="section-title">no event to display</h2>
          :
          showData()
        }
      </div>
    </div>
  );
}

export default EventComponent;
