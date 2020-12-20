import React from 'react'

function ShowTeam({ name, word, season, position, img, link }) {
    return (
        <div className="list-item col-md-12 p-0 shadowItem">
            <a href={link||"https://www.linkedin.com"} target="_blank" rel="noopener noreferrer">
                {/*animate*/}
                <div className="card o-hidden flex-row mb-4 d-flex">
                    <div className="list-thumb d-flex">
                        {/*<!-- TUMBNAIL -->*/}
                        <img src={img} alt={name} />
                    </div>
                    <div className="flex-grow-1 pl-2 d-flex">
                        <div className="card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row">
                            {/*<!-- OTHER DATA -->*/}
                            <div className="w-25 w-sm-100">
                                <div className="item-title" style={{ fontSize: "large" }}>
                                    {name}
                                </div>
                            </div>
                            <p className="m-0 text-muted text-small w-30 w-sm-100">
                                {word}
                            </p>
                            <p className="m-0 text-muted text-small w-30 w-sm-100 d-lg-block item-badges">
                                Position: {position}
                            </p>
                            <p className="m-0 text-muted text-small w-15 w-sm-100 d-lg-block item-badges">
                                {season}
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default ShowTeam
