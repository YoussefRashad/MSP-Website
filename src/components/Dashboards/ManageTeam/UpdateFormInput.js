import React, { useState, useEffect } from 'react'

import { UserContext } from '../../../context/User'
import { TeamContext } from '../../../context/Teams'
import { UPDATE } from '../../../Node/Dashboard'
import { TEAM } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const UpdateFormInput = () => {
    const { showAlert } = React.useContext(UserContext)
    const { teams } = React.useContext(TeamContext)

    const [teamIDSearch, setTeamIDSearch] = useState('')
    const [team, setTeam] = useState(undefined)

    const [loading, setLoading] = useState(false);
    
    // get selected team
    useEffect(() => {
        setLoading(true)
        setTeam(teams.find(team => team.id === teamIDSearch))
        setLoading(false)
    }, [teamIDSearch])


    const getAllTeamsName = () => {
        return teams.map((team, index) => <option value={team.id} key={index}>{team.userName}</option>)
    }

    const getSectionData = () => {
        if (['high board', 'board', 'member'].includes(team.position)) {
            return (
                <>
                    <option value="technical">technical</option>
                    <option value="operational">operational</option>
                    <option value="marketing">marketing</option>
                    {
                        team.position === 'high board' && <option value="other">Other</option>
                    }
                </>
            )
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const data = {
                privilage: true,
                positionType: team.position,
                section: team.section || 'other',
                committee: team.committee || 'other'
            }
            await UPDATE({ data, path: TEAM, id: team.id })
            setTimeout(() => {
                setTeam(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'update your data successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setTeam(undefined)
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            }, 1000);
        }
    }

    const getCommitteeData = () => {
        if (team.section === 'technical') {
            return (
                <>
                    <option value="preparation">Preparation</option>
                    <option value="flutter">Flutter</option>
                    <option value="game development">Game Development</option>
                    <option value="data science">Data Science</option>
                </>
            );
        } else if (team.section === 'operational') {
            return (
                <>
                    <option value="human resources">Human Resources</option>
                    <option value="quality assurance">Quality Assurance</option>
                    <option value="logistics">Logistics</option>
                </>
            );
        } else if (team.section === 'marketing') {
            return (
                <>
                    <option value="graphic design">Graphic Design</option>
                    <option value="photography & video production">Photography & Video Production</option>
                    <option value="digital marketing">Digital Marketing</option>
                </>
            );
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
                        value={teamIDSearch}
                        onChange={(e) => setTeamIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllTeamsName()}
                    </select>
                </div>
            </div>

            {/* Fetched form data */}
            {
                team &&
                <form onSubmit={handleSubmit}>
                    <div className="row">

                        {/* <!-- position --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="position">Position Type</label>
                            <select
                                className="custom-select mr-sm-2"
                                id="position"
                                value={team.position}
                                onChange={(e) => setTeam({ ...team, position: e.target.value })}
                            >
                                <option defaultValue="other">Choose...</option>
                                <option value="president">President</option>
                                <option value="high board">High Board</option>
                                <option value="board">Board</option>
                                <option value="member">Member</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* <!-- section --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="section">Section</label>
                            <select
                                className="custom-select mr-sm-2"
                                id="section"
                                value={team.section}
                                onChange={(e) => setTeam({ ...team, section: e.target.value })}
                                disabled={['president', 'other', ''].includes(team.position)}
                            >
                                <option value="other" defaultValue="other">Choose...</option>
                                {getSectionData()}
                            </select>
                        </div>

                        {/* <!-- committee --> */}
                        <div className="col-md-6 col-12 form-group mb-3">
                            <label htmlFor="committee">Committee</label>
                            <select
                                className="custom-select mr-sm-2"
                                id="committee"
                                value={team.committee}
                                onChange={(e) => setTeam({ ...team, committee: e.target.value })}
                                disabled={team.section === 'other' || team.section === '' || ['president', 'other'].includes(team.position)}
                            >
                                <option value="other" defaultValue="other">Choose...</option>
                                {getCommitteeData()}
                            </select>
                        </div>
                    </div>


                    {/* <!-- BUTTON --> */}
                    <div className="col-md-12">
                        <div className="form-group row text-center" id="">
                            <div className="col-md-12 col-sm-10">
                                <button type="submit" className="btn btn-lg btn-primary">
                                    Update Team Member
                        </button>
                            </div>
                        </div>
                    </div>

                </form>
            }

        </div>
    )
}

export default UpdateFormInput
