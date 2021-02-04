import React, { useState } from 'react'

import LoadingComponent from '../../LoadingComponent';

import { UserContext } from '../../../context/User'
import { SPONSOR } from '../../../utils/EndPoints';
import { ADD } from '../../../Node/Dashboard';

const AddFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)

    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')

    const [loading, setLoading] = useState(false);

    const isEmpty = !name || !link || !image || alert.show

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const data = { name, link, image }
        // send data to the server
        try {
            await ADD({ data, path: SPONSOR })
            setTimeout(() => {
                setName('')
                setLink('')
                setImage('')

                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'sent your form successfully' })
            }, 1000);
        } catch (e) {
            setTimeout(() => {
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            }, 1000);
        }

    }

    if (loading) {
        return <LoadingComponent />
    }

    return (
        <form onSubmit={handleSubmit}>

            {/* <!-- name --> */}
            <div className="row">
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
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
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
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
                                Add Sponsor
                            </button>
                        </div>
                    </div>
                </div>
            }


        </form>
    )
}

export default AddFormInput
