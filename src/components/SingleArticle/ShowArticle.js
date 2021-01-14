import React from 'react'
import { FE_URL } from '../../utils/URL'
import Rate from '../Rating/Rate'

const ShowArticle = ({ article:{ img, title, description, created, author, overallRate }}) => {
    return (
        <div className="card user-profile o-hidden mb-4">
            <div className="displayOnFullScreenSingle">
                <img src={ img || `${FE_URL}/${img}`} style={{ width: "100%", height:'100%' }} alt={title} />
            </div>
            <div className="user-info">
                <p className="m-0 text-24" style={{ paddingTop: "30px" }}></p>
                <p className="text-muted m-0" style={{ paddingTop: "30px" }}></p>
            </div>
            <div className="card-body">
                <div>
                    <h2 style={{ fontSize: "30px", fontFamily: "Cairo, sans-serif" }} className="text-center">
                        {title}</h2>
                    <div className="msPar" >
                        {description}
                    </div>
                    <hr />
                    <div className="row ml-4">
                        <div className="text-22 col-lg-10 col-md-9 col-12">
                            <div className="mb-2">
                                <p className="text-primary mb-1"><i className="i-MaleFemale text-16 mr-2"></i>Author</p>
                                <span className="text-18">{author}</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-primary mb-2"><i className="i-Calendar text-16 mr-1"></i>Date</span>
                                <span className="ml-2 text-18">{created.substr(0, 17)}</span>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12">
                            <Rate title="Overall Rate" readOnly="true" value={overallRate} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ShowArticle
