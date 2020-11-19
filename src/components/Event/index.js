import React from 'react';
import './style.css';

function EventComponent() {
  return (
    <div class="msMain">
      <div class="card user-profile o-hidden mb-4">
        <div>
          <img src="/" width="100%" />
        </div>

        <div class="user-info">
          <p class="m-0 text-24" style={{paddingTop: '30px'}}>
            {' '}
          </p>
          <p class="text-muted m-0" style={{paddingTop: '30px'}}>
            {' '}
          </p>
        </div>
        <div class="card-body">
          <div ngbTabContent>
            <h2 style={{fontSize: '40px', fontFamily: 'Cairo, sans-serif'}}>
              event.header
            </h2>
            {/* [innerHTML]="event.body" */}
            <div class="msPar"></div>
            <hr />
            <div class="row">
              <div class="col-md-4 col-6" style={{fontSize: 'x-large'}}>
                <div class="mb-4">
                  <p class="text-primary mb-1">
                    <i class="i-Calendar text-16 mr-1"></i>Date
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
