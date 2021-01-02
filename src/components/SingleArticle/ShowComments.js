import React from 'react'
import Rate from '../Rating/Rate'
import Evaluating from '../Rating/Evaluating'

const ShowComments = ({ comment:{name, image, title, comment, rate, evaluate, date} }) => {
    return (
        <div className="card user-profile o-hidden mb-4 shadowItemWithoutBox">
            <div className="user-info">
                <p className="m-0 text-24" style={{ paddingTop: "30px" }}></p>
                <p className="text-muted m-0" style={{ paddingTop: "30px" }}></p>
            </div>
            <div className="card-body">
                <div>

                    <div className="row ml-4">
                        <div className="mb-4 col-lg-10 col-md-9 col-12">
                            <p className="text-primary mb-1 text-22"><i className="i-MaleFemale text-16 mr-1"></i>{name}</p>
                            <p className="text-primary mb-1 text-20"><i className="i-Speach-Bubble-6 text-16 mr-1"></i>{title}</p>
                            <span className="text-18">{comment}</span>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12">
                            <Rate title="Rate" readOnly="true" value={+rate} />
                        </div>

                        <div className="mb-4 col-lg-10 col-md-9 col-12">
                            <span className="text-primary text-22"><i className="i-Calendar text-16 mr-1"></i>Date
                            </span>
                            <span className="ml-2 text-18">{date}</span>
                        </div>
                        {/* <div className="col-lg-2 col-md-3 col-12">
                            <Evaluating title="Evaluate" value={evaluate} />
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShowComments