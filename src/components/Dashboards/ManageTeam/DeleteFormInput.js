import React from 'react'
import { TeamContext } from '../../../context/Teams'

const DeleteFormInput = () => {
    const { teams } = React.useContext(TeamContext)
    const [teamIDSearch, setTeamIDSearch] = React.useState('')
    const getAllTeamsName = () => {
        return teams.map((team, index) => <option value={team.id} key={index}>{team.userName}</option>)
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
                        value={teamIDSearch}
                        onChange={(e) => setTeamIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllTeamsName()}
                    </select>
                </div>
            </div>

            {/* Delete Item */}
            <div className="row mt-3">
                {
                    teamIDSearch &&
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
