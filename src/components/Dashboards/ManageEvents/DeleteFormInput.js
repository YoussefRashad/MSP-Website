import React from 'react'
import { EventContext } from '../../../context/Events'

const DeleteFormInput = () => {
    const { events } = React.useContext(EventContext)
    const [eventIDSearch, setEventIDSearch] = React.useState('')
    const getAllEventsName = () => {
        return events.map((event, index) => <option value={event.id} key={index}>{event.title}</option>)
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
                        value={eventIDSearch}
                        onChange={(e) => setEventIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllEventsName()}
                    </select>
                </div>
            </div>

            {/* Delete Item */}
            <div className="row mt-3">
                {
                    eventIDSearch &&
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
