import React from 'react'

import { SponsorContext } from '../context/Sponsors'

import Breadcrumb from './Breadcrumb'

function Sponsors() {
    const { sponsors, loading } = React.useContext(SponsorContext)
    return (
        <div className="msMain">
            <Breadcrumb title="Our Sponsors" />

            {
                loading ? <h2>loading ...</h2> 
                :
                sponsors.length === 0 ? <h2>no sponsors to display</h2>
                :
                <div className="row">
                    {
                        sponsors.map((item, index) => {
                            return <div className="col" key={index}><img src={item.img} alt={item.name} /></div>
                        })
                    }
                </div>
            }

            Slideshow

        </div>
    )
}

export default Sponsors
