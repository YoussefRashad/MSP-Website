import React from 'react'

import { SponsorContext } from '../context/Sponsors'
import Breadcrumb from './Breadcrumb'
import LoadingComponent from './LoadingComponent'
import SponsorList from './SponsorList'

function Sponsors() {
    const { sponsors, loading } = React.useContext(SponsorContext)
    return (
        <div className="msMain">
            <Breadcrumb title="Our Sponsors" />

            {
                loading ? <LoadingComponent />
                :
                sponsors.length === 0 ? <h2>no sponsors to display</h2>
                :
                <div className="row carousel">
                    <SponsorList sponsors={sponsors} />
                </div>
            }
        </div>
    )
}
export default Sponsors
