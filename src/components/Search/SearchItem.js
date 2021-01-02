import React from 'react'
import { Link } from 'react-router-dom'
import Rate from '../Rating/Rate'

const SearchItem = ({ title, path, id, img, author, overallRate, created, location, description }) => {
    return (
        <div className="list-item col-md-12 p-0 shadowItem">
            <Link to={`/${path}/${id}`}>
                {/*animate*/}
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                        {/*<!-- TUMBNAIL -->*/}
                        <img src={img} alt={title} />
                    </div>
                    <div className="flex-grow-1 pl-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            {/*<!-- OTHER DATA -->*/}
                            <div className="w-20 w-sm-100">
                                <div className="item-title" style={{ fontSize: "large"}}>
                                    {title}
                                </div>
                            </div>
                            {
                                author !== undefined &&
                                <p className="m-0 text-muted text-small w-15 w-sm-100">
                                    Author: {author}
                                </p>
                            }

                            {
                                overallRate !== undefined &&
                                <div className="mt-3">
                                    <Rate
                                        styling={{ marginBottom: '0px' }}
                                        value={overallRate}
                                        showLabels="false"
                                        readOnly="true"
                                    />
                                </div>
                            }
                            {
                                location !== undefined &&
                                <p className="m-0 text-muted text-small w-20 w-sm-100">
                                    {location}
                                </p>
                            }
                            {
                                description !== undefined &&
                                <p className="m-0 text-muted text-small w-15 w-sm-100">
                                    {description}
                                </p>
                            }

                            <p className="m-0 text-muted text-small w-15 w-sm-100  d-lg-block item-badges">
                                {created}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default SearchItem