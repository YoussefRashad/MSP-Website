import React, { useState, useEffect } from 'react'

import { UserContext } from '../../../context/User'
import { SponsorContext } from '../../../context/Sponsors'
import { UPDATE } from '../../../Node/Dashboard'
import { SPONSOR } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'


const UpdateFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)
    const { sponsors } = React.useContext(SponsorContext)

    const [sponsorIDSearch, setSponsorIDSearch] = useState('')
    const [sponsor, setSponsor] = useState(undefined)

    const [loading, setLoading] = useState(false);
    // const isEmpty = !title || !author || !image || !description || !feature || alert.show

    const isEmpty = !sponsor || !sponsor.name || !sponsor.link || !sponsor.img || alert.show

    // get selected sponsor
    useEffect(() => {
        setLoading(true)
        setSponsor(sponsors.find(sponsor => sponsor.id === sponsorIDSearch))
        setLoading(false)
    }, [sponsorIDSearch])


    const getAllSponsorsName = () => {
        return sponsors.map((sponsor, index) => <option value={sponsor.id} key={index}>{sponsor.name}</option>)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const data = {
                name: sponsor.name,
                link: sponsor.link,
                image: sponsor.img
            }
            await UPDATE({ data, path: SPONSOR, id: sponsor.id })
            setTimeout(() => {
                setSponsor(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'update your data successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setSponsor(undefined)
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

            {/* Fetched form data */}
            {
                sponsor &&
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                id="name"
                                value={sponsor.name}
                                onChange={(e) => setSponsor({ ...sponsor, name: e.target.value })}
                                autoFocus
                            />
                        </div>

                        {/* <!-- link --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="link">Link</label>
                            <input
                                type="text"
                                id="link"
                                className="form-control"
                                required
                                value={sponsor.link}
                                onChange={(e) => setSponsor({ ...sponsor, link: e.target.value })}
                            />
                            <small id="passwordHelpInline" className="text-muted">
                                Must be from Google Drive.
                        </small>
                        </div>

                        {/* <!-- Image --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="image">Image</label>
                            <input
                                type="text"
                                id="image"
                                className="form-control"
                                required
                                value={sponsor.img}
                                onChange={(e) => setSponsor({ ...sponsor, img: e.target.value })}
                            />
                            <small id="passwordHelpInline" className="text-muted">
                                Must be from Google Drive.
                        </small>
                        </div>
                    </div>
                    {/* empty form text */}
                    {
                        isEmpty &&
                        <div className="row">
                            <div className="col-md form-group mb-3">
                                <p className="form-empty">Please fill out all form fields</p>
                            </div>
                        </div>
                    }


                    {/* <!-- BUTTON --> */}
                    {
                        !isEmpty &&
                        <div className="col-md-12">
                            <div className="form-group row text-center" id="">
                                <div className="col-md-12 col-sm-10">
                                    <button type="submit" className="btn btn-lg btn-primary">
                                        Update Sponsor
                            </button>
                                </div>
                            </div>
                        </div>
                    }
                </form>
            }

        </div>
    )
}

export default UpdateFormInput
