import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import { SponserContext } from '../context/Sponsers'
import Breadcrumb from './Breadcrumb'
import SponserList from './SponserList'

function Sponsers() {
    const { sponsers, loading } = React.useContext(SponserContext)
    return (
        <div className="msMain">
            <Breadcrumb title="Our Sponsers" />

            {
                loading ? <h2>loading ...</h2> 
                :
                sponsers.length === 0 ? <h2>no sponsers to display</h2>
                :
                <div className="row carousel">
                    <SponserList sponsers={sponsers} />
                </div>
            }
        </div>
    )
}
export default Sponsers
