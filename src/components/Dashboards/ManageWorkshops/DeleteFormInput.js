import React from 'react'
import { WorkshopContext } from '../../../context/Workshops'

const DeleteFormInput = () => {
    const { workshops } = React.useContext(WorkshopContext)
    const [workshopIDSearch, setWorkshopIDSearch] = React.useState('')
    const getAllWorkshopsName = () => {
        return workshops.map((workshop, index) => <option value={workshop.id} key={index}>{workshop.title}</option>)
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
                        value={workshopIDSearch}
                        onChange={(e) => setWorkshopIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllWorkshopsName()}
                    </select>
                </div>
            </div>
            
            {/* Delete Item */}
            <div className="row mt-3">
                {
                    workshopIDSearch &&
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
