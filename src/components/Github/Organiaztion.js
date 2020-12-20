import React from 'react'

const Organiaztion = ({ avatar_url, login, description, html_url }) => {
    return (
        <div>
            <div className="row">
                <img src={avatar_url} alt="" style={{ width: "70px" }} />
                <div
                    className="col"
                    style={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginLeft: '20px',
                    }}
                >
                    <h3>{login}</h3>
                </div>
            </div>

            <div className="row">
                <img
                    src={avatar_url}
                    alt=""
                    style={{
                        borderRadius: '50%',
                        width: '70px',
                        visibility: 'hidden',
                    }}
                />
                <div
                    className="col"
                    style={{
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginLeft: '20px',
                    }}
                >
                    <p>{description}</p>
                    <p>
                        <a rel="noopener noreferrer" href={html_url} target="_blank">
                            open on Github
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Organiaztion
