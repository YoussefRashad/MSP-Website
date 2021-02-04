import React, { useState } from 'react'
import validator from 'validator'

import LoadingComponent from '../LoadingComponent';
import { submitFormRecruitment } from '../../Node/submitForm'

import { UserContext } from '../../context/User'

const FormInputs = () => {
    const { showAlert, alert } = React.useContext(UserContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [faculty, setFaculty] = useState('')
    const [committe, setCommitte] = useState('')

    const [loading, setLoading] = useState(false);

    const isEmpty = !name || !email || !age || !faculty || !committe || alert.show

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        if(!validator.isEmail(email)){
            showAlert({
                type: 'danger',
                msg : 'Enter a valid email !'
            })
            setLoading(false)
        }else{
            
        const answered = { name, email, age, faculty, committe }
        // send data to the server
        submitFormRecruitment(answered).then((res) => {
            
            setTimeout(() => {
                
                setName('');
                setEmail('');
                setAge('');
                setFaculty('');
                setCommitte('');

                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'sent your form successfully'})
                
            }, 2000);

        }).catch((error)=>{
            setTimeout(() => {
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..'})
            }, 2000);
        })

        }

    }

    if(loading){
        return <LoadingComponent />
    }


    return (
        <form onSubmit={handleSubmit}>
            
            {/* <!-- NAME --> */}
            <div className="row">
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="firstName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoFocus
                    />
                </div>

            {/* <!-- email --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="firstName">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

            {/* <!-- age --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="firstName">Age</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

            {/* <!-- faculty --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="firstName">Faculty</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={faculty}
                        onChange={(e) => setFaculty(e.target.value)}
                    />
                </div>

            {/* <!-- committe --> */}
                <div className="col-md-6 col-12 form-group mb-3">
                    <label htmlFor="committee">Committee</label>
                    <select
                        className="custom-select mr-sm-2"
                        id="committee"
                        value={committe}
                        onChange={(e) => setCommitte(e.target.value)}
                    >
                        <option defaultValue="other">Choose...</option>
                        <option value="preparation">Preparation</option>
                        <option value="flutter">Flutter</option>
                        <option value="game development">Game Development</option>
                        <option value="data science">Data Science</option>
                        <option value="human resources">Human Resources</option>
                        <option value="quality assurance">Quality Assurance</option>
                        <option value="logistics">Logistics</option>
                        <option value="graphic design">Graphic Design</option>
                        <option value="photography & video production">Photography & Video Production</option>
                        <option value="digital marketing">Digital Marketing</option>
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
                <div className="col-md-12">
                    <div className="form-group row text-center">
                        <div className="col-md-12 col-sm-10">
                            <button type="submit" className="btn btn-lg btn-primary">
                                Send the form
                            </button>
                        </div>
                    </div>
                </div>
            }

        </form>
    )
}

export default FormInputs
