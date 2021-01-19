import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import LoadingComponent from './LoadingComponent.js'
import { UserContext } from '../context/User'
import loginUser from '../Node/loginUser'
import registerUser from '../Node/registerUser'


const UserForm = () => {
    const history = useHistory();
    const { isUser, userLogin, showAlert, alert } = useContext(UserContext)

    const [userName, setUserName] = useState('default')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('default')
    const [quote, setQuote] = useState('default')
    const [startSeason, setStartSeason] = useState('default') // Season-StartSeason >> 2021-2017
    const [linkedIn, setLinkedIn] = useState('default')
    const [positionType, setPositionType] = useState('other')
    const [section, setSection] = useState('other')
    const [committee, setCommittee] = useState('other')
    const [image, setImage] = useState('default')

    const [isMember, setIsMember] = useState(true)
    const [loading, setLoading] = useState(false);

    const isEmpty = !userName || !email || !password || !rePassword || !quote || !startSeason 
        || !linkedIn || !image || alert.show || password.length < 6 || rePassword.length < 6

    const toggleMember = ()=>{
        setIsMember(prevMember=>{
            let isMember = !prevMember
            if(isMember){
                setUserName('default')
                setRePassword('default')
                setQuote('default')
                setStartSeason('default')
                setLinkedIn('default')
                setPositionType('other')
                setSection('other')
                setCommittee('other')
                setImage('default')
            }else{
                setUserName('')
                setRePassword('')
                setQuote('')
                setStartSeason('')
                setLinkedIn('')
                setPositionType('')
                setSection('')
                setCommittee('')
                setImage('')
            }
            return isMember
        })
    }

    const handleSubmit = async (e)=>{
        setLoading(true)
        showAlert({
            msg: "accessing user data. please wait..."
        });
        // alert
        e.preventDefault()

        let response;
        if(isMember){ // login
            response = await loginUser({ email, password })
        }else{ // signup
            // pass == rePass
            if (password === rePassword){
                response = await registerUser({
                    userName,
                    email,
                    password,
                    quote,
                    season: `${new Date().getFullYear()}-${new Date(startSeason).getFullYear()}`,
                    linkedIn,
                    privilage: {
                        positionType: positionType ? positionType : 'other',
                        section: section ? section : 'other',
                        committee: committee ? committee : 'other'
                    },
                    image
                })
            }else{
                showAlert({
                    msg: "your password not match your re-password. please try again...",
                    type: "danger"
                });
                setLoading(false)
                setPassword('')
                setRePassword('')
                return 0;
            }
        }

        if(response.status === 200){
            const {
                user,
                token
            } = response.data

            userLogin({ user, token })
            showAlert({
                msg: `you are logged in : ${user.userName}. browse away my friend`
            });
            history.push("/");
        } else {
            showAlert({
                msg: "there was an error. please try again...",
                type: "danger"
            });
        }

        setLoading(false)
    }

    const getSectionData = ()=>{
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

    const getCommitteeData = ()=>{
        if (section === 'technical'){
            return(
                <>
                    <option value="preparation">Preparation</option>
                    <option value="flutter">Flutter</option>
                    <option value="game development">Game Development</option>
                    <option value="data science">Data Science</option>
                </>
            );
        } else if (section === 'operational'){
            return (
                <>
                    <option value="human resources">Human Resources</option>
                    <option value="quality assurance">Quality Assurance</option>
                    <option value="logistics">Logistics</option>
                </>
            );
        } else if (section === 'marketing'){
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

    if (isUser) {
        // re render into home page & show alert
        showAlert({
            msg: "you are not have a permission to do that, your access is denaied !",
            type: "info"
        })
        history.push('/')
    }

    // validation on privilage & all properties and pass is must be <= 6 char
    return (
        <form onSubmit={handleSubmit}>
            
            <div className="row">

            {/* <!-- USER NAME --> */}
            {
                !isMember &&
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
            
            }

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
            {
                !isMember &&
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="rePassword">Re-password</label>
                    <input
                        type="password"
                        id="rePassword"
                        className="form-control"
                        required
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                    {
                        password !== rePassword || rePassword.length < 6  ?
                        <small id="passwordHelpInline" className="text-muted">
                            Must be 6-20 characters long, and matched the password.
                        </small>
                        : ''
                    }
                </div>
            }

            {/* <!-- quote --> */}
            {
                !isMember &&
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
            }

            {/* <!-- Start Season --> */}
            {
                !isMember &&
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
            }

            {/* <!-- linkedIn Link --> */}
            {
                !isMember &&
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
            }

            {/* <!-- image --> */}
            {
                !isMember &&
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
            }

            {/* <!-- positionType --> */}
            {
                !isMember &&
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
            }

            {/* <!-- section --> */}
            {
                !isMember &&
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
            }

            {/* <!-- committee --> */}
            {
                !isMember &&
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
            }
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
                                {isMember ? 'Login' : 'Sign-up'}
                            </button>
                        </div>
                    </div>
                
            }
            {/* register link */}
            <div className="row">
                <div className="col-md-12 form-group mb-3 text-center mx-3">
                    <p className="register-link">
                        {isMember ? "Need to register " : "Already a member "}
                        <span onClick={toggleMember}>
                            click here
                        </span>
                    </p>
                </div>
            </div>
        
        </form>
    )
}

export default UserForm
