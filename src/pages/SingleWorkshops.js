import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import LoadingComponent from '../components/LoadingComponent'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import { FE_URL } from '../utils/URL'
import { WorkshopContext } from '../context/Workshops'

const SingleWorkshops = () => {
    const [workshop, setWorkshop] = useState(undefined)
    const [loading, setLoading] =  useState(false)
    const { id } = useParams()

    const { getWorkshopByID } = useContext(WorkshopContext)

    useEffect(() => {
        setLoading(true);
        const workshop = getWorkshopByID(id)
        setWorkshop(workshop)
        setLoading(false);
        return () => {}
    }, [])
    
    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])
    
    const showData = ()=>{
        return(
            <div className="card user-profile o-hidden mb-4">
                <div>
                    <img src={ workshop.img || `${FE_URL}/${workshop.img}`} width="100%" alt="Event Logo" />
                </div>

                <div className="user-info">
                    <p className="m-0 text-24" style={{ paddingTop: '30px' }}></p>
                    <p className="text-muted m-0" style={{ paddingTop: '30px' }}></p>
                </div>
                <div className="card-body">
                    <div>
                        <h2 style={{ fontSize: '30px', fontFamily: 'Cairo, sans-serif' }} className="text-center">
                            {workshop.title}
                            </h2>
                            
                        <div className="msPar">
                            {workshop.description}
                        </div>
                        <hr />
                        <div className="row ml-4">
                            <div className="text-22 ">
                                <div className="mb-4">
                                    <span className="text-primary mb-2">
                                        <i className="i-Calendar text-16 mr-1"></i>Date
                                    </span>
                                    <span className="ml-2 text-18">{workshop.created.substr(0, 17)}</span>
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
                        loading ? <LoadingComponent />
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