import React from 'react'
import { SponsorContext } from '../../../context/Sponsors'
import { UserContext } from '../../../context/User'
import { DELETE } from '../../../Node/Dashboard'
import { SPONSOR } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const DeleteFormInput = () => {
    const { sponsors } = React.useContext(SponsorContext)
    const [sponsorIDSearch, setSponsorIDSearch] = React.useState('')
    const getAllSponsorsName = () => {
        return sponsors.map((sponsor, index) => <option value={sponsor.id} key={index}>{sponsor.name}</option>)
    }

    const { showAlert } = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(false)

    const handleClick = async (e) => {
        e.preventDefault()
        setLoading(false)
        try {
            await DELETE({ id: sponsorIDSearch, path: SPONSOR })
            setTimeout(() => {
                setSponsorIDSearch('')
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'delete your item successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setSponsorIDSearch('')
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            }, 1000);
        }
    }

    if (loading) {
        return <LoadingComponent />
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
                            Delete Sponsor
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default DeleteFormInput
