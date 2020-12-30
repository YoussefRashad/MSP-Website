import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { WorkshopContext } from '../context/Workshops'

import Breadcrumb from '../components/Breadcrumb';
import { scrollAutoFromBackToTop } from '../components/ScrollButton';
import Pagination from '../components/Pagination';
import LoadingComponent from '../components/LoadingComponent';


const Workshops = () => {
    const { workshops, loading } = useContext(WorkshopContext)
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [page]);

    const showData = () => {
        let start = (page - 1) * 6;
        let returnedData = [];
        for (let iter = start; iter < workshops.length && iter < start + 6; iter++) {
            returnedData.push(
                <div className="col-md-4 col-12 shadowItemWithoutBox" key={iter}>
                    <Link to={`/workshops/${workshops[iter].idWorkshop}`} className="list-item" style={{ cursor: "pointer" }}>
                        <div className="card o-hidden mb-4 d-flex">
                            <div className="list-thumb d-flex">
                                <img src={workshops[iter].img} alt={workshops[iter].title} />
                            </div>
                            <div className="flex-grow-1">
                                <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                                    <div className="w-80 w-sm-100">
                                        <div className="item-title text-center" style={{ fontSize: 'large' }}>
                                            {workshops[iter].title}
                                        </div>
                                    </div>
                                    <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                                    <p className="m-0 text-muted text-small w-15 w-sm-100">
                                        {workshops[iter].created}
                                    </p>
                                    <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
        return returnedData;
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
                            <div className="row">
                                <Pagination page={page} setPage={setPage} count={
                                    workshops.length/6 > 1 ? Math.floor(workshops.length/6) : 0
                                }  />
                            </div>
                            <div className="row">
                                {showData()}
                            </div>
                            <div className="row">
                                <Pagination page={page} setPage={setPage} count={
                                    workshops.length/6 > 1 ? Math.floor(workshops.length/6) : 0
                                }  />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Workshops
