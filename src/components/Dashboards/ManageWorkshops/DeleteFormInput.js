import React from 'react'
import { UserContext } from '../../../context/User'
import { WorkshopContext } from '../../../context/Workshops'
import { DELETE } from '../../../Node/Dashboard'
import { WORKSHOP } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const DeleteFormInput = () => {
    const { workshops } = React.useContext(WorkshopContext)
    const [workshopIDSearch, setWorkshopIDSearch] = React.useState('')
    const getAllWorkshopsName = () => {
        return workshops.map((workshop, index) => <option value={workshop.id} key={index}>{workshop.title}</option>)
    }

    const { showAlert } = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(false)

    const handleClick = async (e) => {
        e.preventDefault()
        setLoading(false)
        try {
            await DELETE({ id: workshopIDSearch, path: WORKSHOP })
            setTimeout(() => {
                setWorkshopIDSearch('')
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'delete your item successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setWorkshopIDSearch('')
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
                            Delete Workshop
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default DeleteFormInput
