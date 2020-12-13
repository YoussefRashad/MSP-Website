import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { WorkshopContext } from '../context/Workshops'

// import Img from '../assets/images/products/speaker-1.jpg'

const SingleWorkshops = () => {
    const [workshop, setWorkshop] = useState(undefined)
    const [loading, setLoading] =  useState(false)
    const { id } = useParams()

    const { getWorkshop } = useContext(WorkshopContext)

    useEffect(() => {
        setLoading(true);
        const workshop = getWorkshop(id)
        setWorkshop(workshop)
        setLoading(false);
        return () => {}
    })
    console.log(workshop);

    const showData = ()=>{
        return(
            <div className="card user-profile o-hidden mb-4">
                <div>
                    <img src={`http://localhost:3000/${workshop.img}`} width="100%" alt="Event Logo" />
                </div>

                <div className="user-info">
                    <p className="m-0 text-24" style={{ paddingTop: '30px' }}>
                        {' '}
                    </p>
                    <p className="text-muted m-0" style={{ paddingTop: '30px' }}>
                        {' '}
                    </p>
                </div>
                <div className="card-body">
                    <div>
                        <h2 style={{ fontSize: '40px', fontFamily: 'Cairo, sans-serif' }}>
                            {workshop.title}
                            </h2>
                        {/* [innerHTML]="event.body" */}
                        <div className="msPar"></div>
                        <hr />
                        <div className="row">
                            <div className="col-md-4 col-6" style={{ fontSize: 'x-large' }}>
                                <div className="mb-4">
                                    <p className="text-primary mb-1">
                                        <i className="i-Calendar text-16 mr-1"></i>Date
                                        </p>
                                    <span>{workshop.created}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
                {
                        loading ? <h2>loading ...</h2>
                    :
                        !workshop ? <h2 className="section-title">no article to display</h2>
                    :
                        showData()
                }
            </div>
        </div>
    );
}

export default SingleWorkshops