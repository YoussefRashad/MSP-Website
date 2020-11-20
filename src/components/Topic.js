import React from 'react';
import { Link } from 'react-router-dom';

const TopicComponent = () => {
  return (
    <div className="msMain">
      <div className="breadcrumb">
        <h1 style={{fontSize: 'xx-large'}}>Topics</h1>
      </div>

      <div className="separator-breadcrumb border-top" />

      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
        {/* edit */}
          <Link to="/video/topic.name/topic.id">
            <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
              <div className="card-body text-center">
                <div className="content" style={{maxWidth: 'none'}}>
                  <p className="text-primary text-24 line-height-1 mb-2">
                    topic.name{' '}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicComponent;
