import React, { useContext } from 'react';

import { EventContext } from '../context/Events'
import Breadcrumb from './Breadcrumb';
import LoadingComponent from './LoadingComponent';
import { scrollAutoFromBackToTop } from './ScrollButton';
import { GenerateCard as ShowFeatureCard } from './ShowCard';

const EventsComponent = () => {

  const { featureEvents,  loading } = useContext(EventContext)
  React.useEffect(() => {
    scrollAutoFromBackToTop()
    return () => { }
  }, [])

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
                {
                  featureEvents.map((item, index) => {
                    return (
                      <ShowFeatureCard
                        path={'events'}
                        id={item.id}
                        image={item.img}
                        title={item.title}
                        created={item.created}
                        key={index}
                      />
                    );
                  })
                }
            </div>
        }
      </div>
    </div>
  );
};

export default EventsComponent;