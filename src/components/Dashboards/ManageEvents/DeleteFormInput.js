import React from 'react'
import { EventContext } from '../../../context/Events'
import { UserContext } from '../../../context/User'
import { DELETE } from '../../../Node/Dashboard'
import { EVENT } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const DeleteFormInput = () => {
    const { events } = React.useContext(EventContext)
    const [eventIDSearch, setEventIDSearch] = React.useState('')
    const getAllEventsName = () => {
        return events.map((event, index) => <option value={event.id} key={index}>{event.title}</option>)
    }


    const { showAlert } = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(false)

    const handleClick = async (e) => {
        e.preventDefault()
        setLoading(false)
        try {
            await DELETE({ id: eventIDSearch, path: EVENT })
            setTimeout(() => {
                setEventIDSearch('')
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'delete your item successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setEventIDSearch('')
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
                            Delete Event
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default DeleteFormInput
