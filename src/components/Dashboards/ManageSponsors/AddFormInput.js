import React, { useState } from 'react'
import validator from 'validator'

import LoadingComponent from '../../LoadingComponent';

import { UserContext } from '../../../context/User'

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

        // if (!validator.isEmail(email)) {
        //     showAlert({
        //         type: 'danger',
        //         msg: 'Enter a valid email !'
        //     })
        //     setLoading(false)
        // } else {
        //     const answered = { name, email, age, faculty, committe }

        //     // send data to the server
        //     // submitFormEvent(answered).then((res) => {

        //     //     setTimeout(() => {

        //     //         setName('');
        //     //         setEmail('');
        //     //         setAge('');
        //     //         setFaculty('');
        //     //         setCommitte('');

        //     //         setLoading(false);
        //     //         showAlert({ show: true, type: 'success', msg: 'sent your form by successfully' })

        //     //     }, 2000);

        //     // }).catch((error) => {
        //     //     setTimeout(() => {
        //     //         setLoading(false);
        //     //         showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
        //     //     }, 2000);
        //     // })
        // }

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
                                Send the form
                            </button>
                        </div>
                    </div>
                </div>
            }


        </form>
    )
}

export default AddFormInput
