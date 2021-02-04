import React, { useState, useEffect } from 'react'

import { UserContext } from '../../../context/User'
import { WorkshopContext } from '../../../context/Workshops'
import { UPDATE } from '../../../Node/Dashboard'
import { WORKSHOP } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const UpdateFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)
    const { workshops } = React.useContext(WorkshopContext)

    const [workshopsIDSearch, setWorkshopsIDSearch] = useState('')
    const [workshop, setWorkshop] = useState(undefined)

    const [loading, setLoading] = useState(false);
    // const isEmpty = !title || !author || !image || !description || !feature || alert.show
    const isEmpty = !workshop || !workshop.title || !workshop.img || !workshop.description || !workshop.feature || alert.show

    // get selected workshop
    useEffect(() => {
        setLoading(true)
        setWorkshop(workshops.find(workshop => workshop.id === workshopsIDSearch))
        setLoading(false)
    }, [workshopsIDSearch])


    const getAllWorkshopsName = () => {
        return workshops.map((workshop, index) => <option value={workshop.id} key={index}>{workshop.title}</option>)
    }


    if (loading) {
        return <LoadingComponent />
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const data = {
                title: workshop.title,
                description: workshop.description,
                image: workshop.img,
                feature: new Boolean(workshop.feature)
            }
            await UPDATE({ data, path: WORKSHOP, id: workshop.id })
            setTimeout(() => {
                setWorkshop(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'update your data successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setWorkshop(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            }, 1000);
        }
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
                <form onSubmit={handleSubmit}>
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
                                        Update Workshop
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
