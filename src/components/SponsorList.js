import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselComponent = ({ name, link, created, img, key }) =>{
    return (
        <Carousel.Item key={key} interval={1200}>
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

const SponsorList = ({ sponsors })=>{
    return(
        <Carousel>
            {
                
                sponsors.map(sponsor => CarouselComponent({ ...sponsor, key: sponsor.id} ))
            }
        </Carousel>
    )
}


export default SponsorList