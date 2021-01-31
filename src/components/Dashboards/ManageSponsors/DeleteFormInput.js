import React from 'react'
import { SponsorContext } from '../../../context/Sponsors'

const DeleteFormInput = () => {
    const { sponsors } = React.useContext(SponsorContext)
    const [sponsorIDSearch, setSponsorIDSearch] = React.useState('')
    const getAllSponsorsName = () => {
        return sponsors.map((sponsor, index) => <option value={sponsor.id} key={index}>{sponsor.name}</option>)
    }

    const handleClick = () => {

    }

    return (
        <div>

            <div className="row">
                {/* <!-- Feature --> */}
                <div className="col-md-6 col-12 form-group mb-3 m-auto text-center">
                    <label htmlFor="feature">Search by name</label>
                    <select
                        className="custom-select mr-sm-2"
                        id="feature"
                        value={sponsorIDSearch}
                        onChange={(e) => setSponsorIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllSponsorsName()}
                    </select>
                </div>
            </div>

            {/* Delete Item */}
            <div className="row mt-3">
                {
                    sponsorIDSearch &&
                    <div className="col-md-6 col-12 form-group m-auto text-center">
                        <button
                            onClick={handleClick}
                            className="btn btn-danger btn-lg"
                        >
                            Delete
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default DeleteFormInput
