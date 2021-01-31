import React, { useState, useEffect } from 'react'

import { UserContext } from '../../../context/User'
import { EventContext } from '../../../context/Events'
import { UPDATE } from '../../../Node/Dashboard'
import { EVENT } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const UpdateFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)
    const { events } = React.useContext(EventContext)

    const [eventIDSearch, setEventIDSearch] = useState('')
    const [event, setEvent] = useState(undefined)

    const [loading, setLoading] = useState(false);
    // const isEmpty = !title || !author || !image || !description || !feature || alert.show

    const isEmpty = !event || !event.title || !event.location || !event.img || !event.description || !event.feature || alert.show

    // get selected event
    useEffect(() => {
        setLoading(true)
        setEvent(events.find(event => event.id === eventIDSearch))
        setLoading(false)
    }, [eventIDSearch])


    const getAllEventsName = () => {
        return events.map((event, index) => <option value={event.id} key={index}>{event.title}</option>)
    } 

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const data = {
                title: event.title,
                description: event.description,
                location: event.location,
                image: event.img,
                feature: new Boolean(event.feature)
            }
            await UPDATE({ data, path: EVENT, id: event.id })
            setTimeout(() => {
                setEvent(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'update your data by successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setEvent(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            }, 1000);
        }
    }
    
    if(loading){
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
                        value={eventIDSearch}
                        onChange={(e) => setEventIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllEventsName()}
                    </select>
                </div>
            </div>

            {/* Fetched form data */}
            {
                event &&
                <form onSubmit={handleSubmit}>
                    <div div className="row">
                        {/* <!-- title --> */ } 
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                id="title"
                                value={event.title}
                                onChange={(e) => setEvent({ ...event, title: e.target.value }) }
                                autoFocus
                            />
                        </div>

                        {/* <!-- Author --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                className="form-control"
                                required
                                value={event.location}
                                onChange={(e) => setEvent({ ...event, location: e.target.value }) }
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
                                value={event.img}
                                onChange={(e) => setEvent({ ...event, img: e.target.value }) }
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
                                value={event.feature}
                                onChange={(e) => setEvent({ ...event, feature: e.target.value }) }
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
                                value={event.description}
                                onChange={(e) => setEvent({ ...event, description: e.target.value }) }
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
                                        Add an article
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
