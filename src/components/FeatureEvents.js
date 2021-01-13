import React, { useContext } from 'react';

import { EventContext } from '../context/Events'
import Breadcrumb from './Breadcrumb';
import LoadingComponent from './LoadingComponent';
import { scrollAutoFromBackToTop } from './ScrollButton';
import { GenerateCard as ShowFeatureCard } from './ShowCard';
import Pagination from './Pagination';

const EventsComponent = () => {

  React.useEffect(() => {
    scrollAutoFromBackToTop()
    return () => { }
  }, [])

  const { featureEvents,  loading } = useContext(EventContext)
  const [page, setPage] = React.useState(1)
  const noOfItemsInPage = 3;

  const getPagination = () => {
    return (
      <div className="row">
        <Pagination page={page} setPage={setPage} count={
          featureEvents.length / noOfItemsInPage > 1 ? Math.floor(featureEvents.length / noOfItemsInPage) : 0
        } />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column msContant">
      <div className="msMain">
        <Breadcrumb title="Events" />
        {
          loading ? <LoadingComponent />
          :
            featureEvents.length === 0 ? <h2>no events to display</h2>
          :
            <div>

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
              {getPagination()}
            </div>
        }
      </div>
    </div>
  );
};

export default EventsComponent;