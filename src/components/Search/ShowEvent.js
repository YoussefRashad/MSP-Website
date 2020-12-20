import React from 'react'
import { Link } from 'react-router-dom'

function ShowEvent({ title, location, img, created, idEvent }) {
    return (
        <div className="list-item col-md-12 p-0 shadowItem">
            <Link to={`/events/${idEvent}`}>
                {/*animate*/}
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                        {/*<!-- TUMBNAIL -->*/}
                        <img src={img} alt={title} />
                    </div>
                    <div className="flex-grow-1 pl-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            {/*<!-- OTHER DATA -->*/}
                            <div className="w-40 w-sm-100">
                                <div className="item-title" style={{ fontSize: "large" }}>
                                    {title}
                                </div>
                            </div>
                            {/* <p className="m-0 text-muted text-small w-15 w-sm-100">
                                {description}
                            </p> */}
                            <p className="m-0 text-muted text-small w-20 w-sm-100">
                                {location}
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-lg-block item-badges">
                                {created}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ShowEvent
