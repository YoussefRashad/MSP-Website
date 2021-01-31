import React, { useState } from 'react'
import validator from 'validator'

import LoadingComponent from '../../LoadingComponent';

import { UserContext } from '../../../context/User'

const AddFormInput = () => {

    const { isUser, showAlert, alert, loading } = React.useContext(UserContext)

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [quote, setQuote] = useState('')
    const [startSeason, setStartSeason] = useState('') // Season-StartSeason >> 2021-2017
    const [linkedIn, setLinkedIn] = useState('')
    const [positionType, setPositionType] = useState('other')
    const [section, setSection] = useState('other')
    const [committee, setCommittee] = useState('other')
    const [image, setImage] = useState('')

    const isEmpty = !userName || !email || !password || !confirmPassword || !quote || !startSeason
        || !linkedIn || !image || alert.show || password.length < 6 || confirmPassword.length < 6


    const handleSubmit = async (e) => {
        // setLoading(true)
        // showAlert({
        //     msg: "accessing user data. please wait..."
        // });
        // // alert
        // e.preventDefault() // signup
        // // pass == rePass
        // if (password === confirmPassword) {
        //     response = await registerUser({
        //         userName,
        //         email,
        //         password,
        //         quote,
        //         season: `${new Date().getFullYear()}-${new Date(startSeason).getFullYear()}`,
        //         linkedIn,
        //         privilage: {
        //             positionType: positionType ? positionType : 'other',
        //             section: section ? section : 'other',
        //             committee: committee ? committee : 'other'
        //         },
        //         image
        //     })
        // } else {
        //     showAlert({
        //         msg: "your password not match your re-password. please try again...",
        //         type: "danger"
        //     });
        //     setLoading(false)
        //     setPassword('')
        //     setConfirmPassword('')
        //     return 0;
        // }
    

        // if (response.status === 200) {
        //     const {
        //         user,
        //         token
        //     } = response.data

        //     userLogin({ user, token })
        //     showAlert({
        //         msg: `you are logged in : ${user.userName}. browse away my friend`
        //     });
        //     history.push("/");
        // } else {
        //     showAlert({
        //         msg: "there was an error. please try again...",
        //         type: "danger"
        //     });
        // }

        // setLoading(false)
    }

    const getSectionData = () => {
        if (['high board', 'board', 'member'].includes(positionType)) {
            return (
                <>
                    <option value="technical">technical</option>
                    <option value="operational">operational</option>
                    <option value="marketing">marketing</option>
                    {
                        positionType === 'high board' && <option value="other">Other</option>
                    }
                </>
            )
        }
    }

    const getCommitteeData = () => {
        if (section === 'technical') {
            return (
                <>
                    <option value="preparation">Preparation</option>
                    <option value="flutter">Flutter</option>
                    <option value="game development">Game Development</option>
                    <option value="data science">Data Science</option>
                </>
            );
        } else if (section === 'operational') {
            return (
                <>
                    <option value="human resources">Human Resources</option>
                    <option value="quality assurance">Quality Assurance</option>
                    <option value="logistics">Logistics</option>
                </>
            );
        } else if (section === 'marketing') {
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

    // validation on privilage & all properties and pass is must be <= 6 char
    return (
        <form onSubmit={handleSubmit}>

            <div className="row">

                {/* <!-- USER NAME --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="firstName">Username</label>
                    <input
                        type="text"
                        id="firstName"
                        className="form-control"
                        required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        autoFocus
                    />
                </div>


                {/* <!-- email --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                    />
                </div>

                {/* <!-- password --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        password.length < 6 &&
                        <small id="passwordHelpInline" className="text-muted">
                            Must be 6-20 characters long.
                        </small>
                    }
                </div>

                {/* <!-- Re Password --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="confirmPassword">Re-password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {
                        password !== confirmPassword || confirmPassword.length < 6 ?
                            <small id="passwordHelpInline" className="text-muted">
                                Must be 6-20 characters long, and matched the password.
                    </small>
                            : ''
                    }
                </div>

                {/* <!-- quote --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="quote">Quote</label>
                    <input
                        type="text"
                        id="quote"
                        className="form-control"
                        required
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                    />
                </div>

                {/* <!-- Start Season --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="startSeason">Start Season</label>
                    <input
                        type="date"
                        id="startSeason"
                        className="form-control"
                        required
                        value={startSeason}
                        onChange={(e) => setStartSeason(e.target.value)}
                    />
                </div>

                {/* <!-- linkedIn Link --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="linkedIn">LinkedIn Link</label>
                    <input
                        type="text"
                        id="linkedIn"
                        className="form-control"
                        required
                        value={linkedIn}
                        onChange={(e) => setLinkedIn(e.target.value)}
                    />
                </div>

                {/* <!-- image --> */}
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

                {/* <!-- positionType --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="positionType">Position Type</label>
                    <select
                        className="custom-select mr-sm-2"
                        id="positionType"
                        value={positionType}
                        onChange={(e) => setPositionType(e.target.value)}
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
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        disabled={['president', 'other', ''].includes(positionType)}
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
                        value={committee}
                        onChange={(e) => setCommittee(e.target.value)}
                        disabled={section === 'other' || section === '' || ['president', 'other'].includes(positionType)}
                    >
                        <option value="other" defaultValue="other">Choose...</option>
                        {getCommitteeData()}
                    </select>
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
                <div className="row">
                    <div className="form-group col-md-12 col-12 text-center">
                        <button
                            className="btn btn-lg btn-primary"
                        >
                            Add Member
                        </button>
                    </div>
                </div>

            }

        </form>
    )
}

export default AddFormInput
