import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselComponent = ({ name, link, created, img, id }) =>{
    return (
        <Carousel.Item key={id} interval={1200}>
            <img
                className="d-block w-100 h-100"
                src={img}
                alt={name}
            />
            <Carousel.Caption>
                <h3>{name}</h3>
                <p>{created}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" >Page</a>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

const SponserList = ({ sponsers })=>{
    return(
        <Carousel>
            {
                sponsers.map(sponser => CarouselComponent({ ...sponser, id:sponser.idSponser}) )
            }
        </Carousel>
    )
}

export default SponserList
