import React from 'react';
import './style.css';

function EventComponent() {
  return (
    <div className="msMain">
      <div className="card user-profile o-hidden mb-4">
        <div>
          <img src="/" width="100%" />
        </div>

        <div className="user-info">
          <p className="m-0 text-24" style={{paddingTop: '30px'}}>
            {' '}
          </p>
          <p className="text-muted m-0" style={{paddingTop: '30px'}}>
            {' '}
          </p>
        </div>
        <div className="card-body">
          <div ngbTabContent>
            <h2 style={{fontSize: '40px', fontFamily: 'Cairo, sans-serif'}}>
              event.header
            </h2>
            {/* [innerHTML]="event.body" */}
            <div className="msPar"></div>
            <hr />
            <div className="row">
              <div className="col-md-4 col-6" style={{fontSize: 'x-large'}}>
                <div className="mb-4">
                  <p className="text-primary mb-1">
                    <i className="i-Calendar text-16 mr-1"></i>Date
                  </p>
                  <span>event.date</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventComponent;
