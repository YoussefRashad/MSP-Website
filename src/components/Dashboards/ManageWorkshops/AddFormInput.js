import React, { useState } from 'react'
import validator from 'validator'

import LoadingComponent from '../../LoadingComponent';

import { UserContext } from '../../../context/User'

const AddFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [feature, setFeature] = useState(false)
    const [description, setDescription] = useState('')

    const [loading, setLoading] = useState(false);

    const isEmpty = !title || !image || !description || !feature || alert.show

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // setLoading(true)

        // if (!validator.isEmail(email)) {
        //     showAlert({
        //         type: 'danger',
        //         msg: 'Enter a valid email !'
        //     })
        //     setLoading(false)
        // } else {
        //     const answered = { name, email, age, faculty, committe }

            // send data to the server
            // submitFormEvent(answered).then((res) => {

            //     setTimeout(() => {

            //         setName('');
            //         setEmail('');
            //         setAge('');
            //         setFaculty('');
            //         setCommitte('');

            //         setLoading(false);
            //         showAlert({ show: true, type: 'success', msg: 'sent your form by successfully' })

            //     }, 2000);

            // }).catch((error) => {
            //     setTimeout(() => {
            //         setLoading(false);
            //         showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            //     }, 2000);
            // })
        // }

    }

    if (loading) {
        return <LoadingComponent />
    }

    return (
        <form onSubmit={handleSubmit}>

            {/* <!-- title --> */}
            <div className="row">
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus
                    />
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

                {/* <!-- Feature --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="feature">Feature</label>
                    <select
                        className="custom-select mr-sm-2"
                        id="feature"
                        value={feature}
                        onChange={(e) => setFeature(e.target.value)}
                    >
                        <option defaultValue="false" hidden>Choose...</option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>

                {/* Description */}
                <div className="col-12 form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="textarea"
                        id="description"
                        className="form-control"
                        cols="30"
                        rows="5"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
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
