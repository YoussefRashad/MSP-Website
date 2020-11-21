import React from 'react';

function Social() {
  return (
    <div className="msMain">
      <hr />
      <h4 style={{fontSize: 'x-large'}}>Reach us</h4>
      <p className="mb-4">
        The Official accounts of Microsoft Tech Club at Helwan University.
      </p>
      <div className="row">
        <div className="col-md-2 col-sm-4 col-6 text-center">
          <a href="https://www.facebook.com/HelwanTC" target="_blank" rel="noopener noreferrer">
            <i className="i-Facebook-2 text-32 text-primary"></i>
            <p className="text-16 mt-1">Facbook</p>
          </a>
        </div>
        <div className="col-md-2 col-sm-4 col-6 text-center">
          <a href="https://twitter.com/Msp_TechClub" target="_blank" rel="noopener noreferrer">
            <i className="i-Twitter text-32 text-primary"></i>
            <p className="text-16 mt-1">Twitter</p>
          </a>
        </div>
        <div className="col-md-2 col-sm-4 col-6 text-center">
          <a href="https://www.instagram.com/msptechclub/" target="_blank" rel="noopener noreferrer">
            <i className="i-Instagram text-32 text-primary"></i>
            <p className="text-16 mt-1">Instagram</p>
          </a>
        </div>
        <div className="col-md-2 col-sm-4 col-6 text-center">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="i-Youtube text-32 text-primary"></i>
            <p className="text-16 mt-1">Youtube</p>
          </a>
        </div>
        <div className="col-md-2 col-sm-4 col-6 text-center">
          <a
            href="https://www.linkedin.com/company/msptechclubhelwan/"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="i-Linkedin-2 text-32 text-primary"></i>
            <p className="text-16 mt-1">Linked In</p>
          </a>
        </div>
        <div className="col-md-2 col-sm-4 col-6 text-center">
          <a
            href="https://www.github.com/Microsoft-Student-Partner-HU/"
            target="_blank" rel="noopener noreferrer"
          >
            <i className="i-Github-2 text-32 text-primary"></i>
            <p className="text-16 mt-1">Github</p>
          </a>
        </div>
        <div className="col-md-2 col-sm-4 col-6 text-center">
          <a href="https://www.behance.net/MSPHU" target="_blank" rel="noopener noreferrer">
            <i className="i-Behance text-32 text-primary"></i>
            <p className="text-16 mt-1">Behance</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
