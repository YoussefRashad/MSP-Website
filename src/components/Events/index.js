import React from 'react';

const EventsComponent = () => {
  return (
    <div class="msMain">
      <div class="breadcrumb">
        <h1 style={{fontSize: 'xx-large'}}>Events</h1>

      </div>

      <div class="separator-breadcrumb border-top" />

      <div class="row">
        <div class="list-item" style={{cursor: 'pointer'}}>
          <div class="card o-hidden mb-4 d-flex">
            <div class="list-thumb d-flex">
              <img src="/" alt="" />
            </div>
            <div class="flex-grow-1">
              <div class="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                <div class="w-40 w-sm-100">
                  <div class="item-title" style={{fontSize: 'large'}}>
                    item.header
                  </div>
                </div>
                <p class="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                <p class="m-0 text-muted text-small w-15 w-sm-100">
                  item.date
                </p>
                <p class="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 mt-3">
          pagination-controls
        </div>
      </div>

    </div>
  );
};

export default EventsComponent;