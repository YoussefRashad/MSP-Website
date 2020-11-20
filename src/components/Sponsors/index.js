import React from 'react'
import Img from '../../assets/images/products/headphone-1.jpg'
function Sponsors() {
    return (
        <div className="msMain">
            <div className="breadcrumb">
                <h1 style={{ fontSize: "xx-large" }}>Our Sponsors</h1>
            </div>
            <div className="separator-breadcrumb border-top"></div>

            <div className="row">
                <div className="col"><img src={Img} alt="" /></div>
                <div className="col"><img src={Img} alt="" /></div>
                <div className="col"><img src={Img} alt="" /></div>
                <div className="col"><img src={Img} alt="" /></div>
            </div>

            SlideShow

        </div>
    )
}

export default Sponsors
