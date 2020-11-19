import React from 'react';

const TeamComponent = () => {
  return (
    <div className="msMain">

      <div className="breadcrumb">
        <h1 style={{fontSize: "xx-large"}}>Team</h1>
      </div>

      <div className="separator-breadcrumb border-top" />

      <div className="">
        <div className="row">
          {/* <!-- BG IMAGE CARDS --> */}
          <div className="col-md-4">
            <div className="card bg-dark text-white o-hidden mb-4 msCard">
              <img className="card-img msImage" src="/" alt="CardImage" />
              
              <div className="card-img-overlay msText">
                <div className="text-center pt-4">
                  <h5 className="card-title mb-2 text-white">item.name</h5>
                  <div className="separator border-top mb-2" />
                  <p className="text-small font-italic">item.word</p>
                </div>
                <div className="p-1 text-left card-footer font-weight-light d-flex">
                  <span className="mr-3 d-flex align-items-center">
                    <i className="i-Calendar-4 mr-2" /> Season item.season{' '}
                  </span>
                  <span className="d-flex align-items-center">
                    <i className="i-Speach-Bubble-6 mr-1" />item.position
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
