import React, { useState, useEffect } from 'react'

import { UserContext } from '../../../context/User'
import { WorkshopContext } from '../../../context/Workshops'

const UpdateFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)
    const { workshops } = React.useContext(WorkshopContext)

    const [workshopsIDSearch, setWorkshopsIDSearch] = useState('')
    const [workshop, setWorkshop] = useState({})

    const [loading, setLoading] = useState(false);
    // const isEmpty = !title || !author || !image || !description || !feature || alert.show


    // get selected workshop
    useEffect(() => {
        setLoading(true)
        setWorkshop(workshops.find(workshop => workshop.id === workshopsIDSearch))
        setLoading(false)
    }, [workshopsIDSearch])


    const getAllWorkshopsName = () => {
        return workshops.map((workshop, index) => <option value={workshop.id} key={index}>{workshop.title}</option>)
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
                        value={workshopsIDSearch}
                        onChange={(e) => setWorkshopsIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllWorkshopsName()}
                    </select>
                </div>
            </div>

            {/* Fetched form data */}
            {
                workshop &&
                <div className="row">
                    <div className="col-md-6 col-12 form-group mb-3">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            id="title"
                            value={workshop.title}
                            onChange={(e) => setWorkshop({ ...workshop, title: e.target.value })}
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
                            value={workshop.img}
                            onChange={(e) => setWorkshop({ ...workshop, img: e.target.value })}
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
                            value={workshop.feature}
                            onChange={(e) => setWorkshop({ ...workshop, feature: e.target.value })}
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
                            value={workshop.description}
                            onChange={(e) => setWorkshop({ ...workshop, description: e.target.value })}
                        />
                    </div>
                </div>
            }

        </div>
    )
}

export default UpdateFormInput
