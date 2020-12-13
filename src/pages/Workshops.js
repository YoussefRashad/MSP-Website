import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { WorkshopContext } from '../context/Workshops'

import Breadcrumb from '../components/Breadcrumb';


const Workshops = () => {
    const { workshops, loading } = useContext(WorkshopContext)
    
    const showData = workshops.map((item, index) => {
        return (
            <div className="col-4" key={index}>
                <Link to={`/workshops/${item.idWorkshop}`} className="list-item" style={{ cursor: "pointer" }}>
                    <div className="card o-hidden mb-4 d-flex">
                        <div className="list-thumb d-flex">
                            <img src={item.img} alt={item.header} />
                        </div>
                        <div className="flex-grow-1">
                            <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                                <div className="w-50 w-sm-100">
                                    <div className="item-title" style={{ fontSize: 'large' }}>
                                        {item.header}
                                    </div>
                                </div>
                                <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                                <p className="m-0 text-muted text-small w-15 w-sm-100">
                                    {item.date}
                                </p>
                                <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })

    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">

                <Breadcrumb title="Workshops" />
                {
                    loading ? <h2>Loading ...</h2>
                    :
                        workshops.length === 0 ? <h2>no workshops to display</h2> 
                    :
                        <div className="row">
                            {showData}
                            <div className="col-md-12 mt-3">
                                pagination-controls
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Workshops
