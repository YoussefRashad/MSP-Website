import React from 'react';
import Img from '../assets/images/products/speaker-1.jpg'

function Articles () {
  return (
    <div className="msMain">

      <div className="breadcrumb">
        <h1 style={{fontSize: 'xx-large'}}>Articles</h1>
      </div>

      <div className="separator-breadcrumb border-top" />

      <div className="row">
        <div className="list-item" style={{cursor: "pointer"}}>
          <div className="card o-hidden mb-4 d-flex">
            <div className="list-thumb d-flex">
              <img src={Img} alt="" />
            </div>
            <div className="flex-grow-1">
              <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                <div className="w-40 w-sm-100">
                  <div className="item-title" style={{fontSize: 'large'}}>
                    item.header
                  </div>
                </div>
                <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                <p className="m-0 text-muted text-small w-15 w-sm-100">
                  item.date
                </p>
                <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12 mt-3">
          pagination-controls
        </div>
      </div>
    </div>
  );
}

export default Articles;
/*


*/