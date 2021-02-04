import React, { useState } from 'react'

import LoadingComponent from '../../LoadingComponent';

import { UserContext } from '../../../context/User'
import { VIDEO } from '../../../utils/EndPoints';
import { ADD } from '../../../Node/Dashboard';

const AddFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)

    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [committee, setCommittee] = useState('')
    const [image, setImage] = useState('')
    const [feature, setFeature] = useState(false)
    const [description, setDescription] = useState('')

    const [loading, setLoading] = useState(false);

    const isEmpty = !title || !image || !description || !feature || alert.show

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const data = { title, link, defaultImage: image, feature: Boolean(feature), description, committee }
        // send data to the server
        try {
            await ADD({ data, path: VIDEO })
            setTimeout(() => {
                setTitle('')
                setImage('')
                setLink('')
                setFeature('')
                setDescription('')
                setCommittee('preparation')
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

    const getCommitteeData = ()=>{
        return(
            <>
                <option value="preparation">Preparation</option>
                <option value="flutter">Flutter</option>
                <option value="game development">Game Development</option>
                <option value="data science">Data Science</option>
                <option value="human resources">Human Resources</option>
                <option value="quality assurance">Quality Assurance</option>
                <option value="logistics">Logistics</option>
                <option value="graphic design">Graphic Design</option>
                <option value="photography & video production">Photography & Video Production</option>
                <option value="digital marketing">Digital Marketing</option>
            </>
        )
    }

    return ( /////////////// ADD >> ATTACHEMENTS 
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

                {/* <!-- link --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="link">Video Link</label>
                    <input
                        type="text"
                        id="link"
                        className="form-control"
                        required
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
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

                {/* <!-- committee --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="committee">Committee</label>
                    <select
                        className="custom-select mr-sm-2"
                        id="committee"
                        value={committee}
                        onChange={(e) => setCommittee(e.target.value)}
                    >
                        <option defaultValue="preparation" disabled>Choose...</option>
                        {getCommitteeData()}
                    </select>
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
                                Add Video
                            </button>
                        </div>
                    </div>
                </div>
            }


        </form>
    )
}

export default AddFormInput
