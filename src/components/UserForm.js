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
    const [positionType, setPositionType] = useState('default')
    const [section, setSection] = useState('default')
    const [committee, setCommittee] = useState('default')
    const [image, setImage] = useState('default')

    const [isMember, setIsMember] = useState(true)
    const [loading, setLoading] = useState(false);

    const isEmpty = !userName || !email || !password || !rePassword || !quote || !startSeason 
        || !linkedIn || !positionType || !section || !committee || !image || alert.show

    const toggleMember = ()=>{
        setIsMember(prevMember=>{
            let isMember = !prevMember
            if(isMember){
                setUserName('default')
                setRePassword('default')
                setQuote('default')
                setStartSeason('default')
                setLinkedIn('default')
                setPositionType('default')
                setSection('default')
                setCommittee('default')
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
            response = await registerUser({
                userName,
                email,
                password,
                quote, 
                season : `${new Date().getFullYear()}-${new Date(startSeason).getFullYear()}`, 
                linkedIn, 
                privilage:{
                    positionType : positionType ? positionType : 'other',
                    section : section ? section : 'other' ,
                    committee : committee ? committee : 'other'
                },
                image
            })
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
            //  show alert
        }

        setLoading(false)
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

            {/* <!-- positionType --> */}
            {
                !isMember &&
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="positionType">Position Type</label>
                    <input
                        type="text"
                        id="positionType"
                        className="form-control"
                        required
                        value={positionType}
                        onChange={(e) => setPositionType(e.target.value)}
                    />
                </div>
            }

            {/* <!-- section --> */}
            {
                !isMember &&
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="section">Section</label>
                    <input
                        type="text"
                        id="section"
                        className="form-control"
                        required
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                    />
                </div>
            }

            {/* <!-- committee --> */}
            {
                !isMember &&
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="committee">Committee</label>
                    <input
                        type="text"
                        id="committee"
                        className="form-control"
                        required
                        value={committee}
                        onChange={(e) => setCommittee(e.target.value)}
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
