import React from 'react'
import { Link } from 'react-router-dom'
import Rate from '../components/Rating/Rate'

export const GenerateCard = ({ path, id, image, title, overallRate, created }) => {

    return (
        <div className={`col-md-4 col-12 shadowItemWithoutBox`}>
            <Link to={`/${path}/${id}`} className="list-item" style={{ cursor: "pointer" }}>
                <div className="card o-hidden mb-4 d-flex">
                    <div className="list-thumb d-flex displayOnFullScreen">
                        <img src={image} alt={title} className="w-100 h-100" />
                    </div>
                    <div className="flex-grow-1">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center">
                            <div className="w-80 w-sm-100">
                                <div className="item-title text-center" style={{ fontSize: 'large' }}>
                                    {title}
                                </div>
                            </div>
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
                            <p className="m-0 text-muted text-small w-15 w-sm-100">Date</p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100">
                                {created}
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const ShowCard = ({ page, noOfItemsInPage, allowOverallRate=false, path, cards })=>{
    let start = (page - 1) * noOfItemsInPage;
    let returnedData = [];
    for (let index = start; index < cards.length && index < start + noOfItemsInPage; index++){
        returnedData.push(
            <GenerateCard
                path={path}
                id={cards[index].id}
                image={cards[index].img}
                title={cards[index].title}
                overallRate={allowOverallRate ? + cards[index].overallRate : undefined}
                created={cards[index].created}
                key={index}
            />
        )
    }
    return returnedData
}

export default ShowCard
