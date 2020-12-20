import React from 'react'

function Member({ image, title, subTitle, position, style, links }) {
    return (
        <div className={style + " shadowItemWithoutBox"}>
            <div className="singleFace d-flex align-items-center mt-2">
                <div className="thumb">
                    <img src={image} alt={title} />
                </div>
                <div className="info">
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                    <span>{position}</span>
                    <p>
                        {
                            links &&
                            links.map((link, index) => <a href={link.URL} className="mr-3" target="_blank" rel="noopener noreferrer" key={index}>{link.name}</a>)
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Member
