import React, { useContext } from 'react'

import { WorkshopContext } from '../context/Workshops'

import Breadcrumb from '../components/Breadcrumb';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import Pagination from '../components/Pagination';
import LoadingComponent from '../components/LoadingComponent';
import ShowCard from '../components/ShowCard';


const Workshops = () => {
    const { workshops, loading } = useContext(WorkshopContext)
    const [page, setPage] = React.useState(1);
    const noOfItemsInPage = 6;

    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [page]);


    const getPagination = () => {
        return (
            <div className="row">
                <Pagination page={page} setPage={setPage} count={
                    workshops.length / noOfItemsInPage > 1 ? Math.floor(workshops.length / noOfItemsInPage) : 0
                } />
            </div>
        );
    }
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">

                <Breadcrumb title="Workshops" />
                {
                    loading ? <LoadingComponent />
                    :
                        workshops.length === 0 ? <h2>no workshops to display</h2> 
                    :
                        <div>
                            {getPagination()}
                            <div className="row">
                                    {
                                        <ShowCard
                                            page={page}
                                            noOfItemsInPage={noOfItemsInPage}
                                            cards={workshops}
                                            path={'workshops'}
                                        />
                                    }
                            </div>
                            {getPagination()}
                        </div>
                }
            </div>
        </div>
    )
}

export default Workshops
