import React, { useState } from 'react'

import LoadingComponent from '../LoadingComponent';
import Alert from '../Alert';
import sumbitFormRecruitment from '../../Node/sumbitFormRecruitment'

const FormInputs = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [faculty, setFaculty] = useState('')
    const [committe, setCommitte] = useState('')

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false })
    

    const hideAlert = () => {
        setAlert({ ...alert, show: false })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const answered = { name, email, age, faculty, committe }

        // send data to the server
        sumbitFormRecruitment(answered).then((res) => {
            
            setTimeout(() => {
                
                setName('');
                setEmail('');
                setAge('');
                setFaculty('');
                setCommitte('');

                setLoading(false);
                setAlert({ show: true, type: 'success', desc: 'sent your form by successfully'})
                
            }, 2000);

        }).catch((error)=>{
            setTimeout(() => {
                setLoading(false);
                setAlert({ show: true, type: 'danger', desc: 'there is an error, please try later ..'})
            }, 2000);
        })

    }

    if(loading){
        return <LoadingComponent />
    }


    return (
        <form onSubmit={handleSubmit}>
            {alert.show && <Alert type={alert.type} desc={alert.desc} hideAlert={hideAlert} />}
            
            {/* <!-- NAME --> */}
            <div className="row">
                <div className="col-md form-group mb-3">
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
            </div>

            {/* <!-- email --> */}
            <div className="row">
                <div className="col-md form-group mb-3">
                    <label htmlFor="firstName">email</label>
                    <input
                        type="email"
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            {/* <!-- age --> */}
            <div className="row">
                <div className="col-md form-group mb-3">
                    <label htmlFor="firstName">age</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
            </div>

            {/* <!-- faculty --> */}
            <div className="row">
                <div className="col-md form-group mb-3">
                    <label htmlFor="firstName">faculty</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={faculty}
                        onChange={(e) => setFaculty(e.target.value)}
                    />
                </div>
            </div>

            {/* <!-- committe --> */}
            <div className="row">
                <div className="col-md form-group mb-3">
                    <label htmlFor="firstName">committe</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        value={committe}
                        onChange={(e) => setCommitte(e.target.value)}
                    />
                </div>
            </div>
            

            {/* <!-- BUTTON --> */}
            <div className="col-md-12">
                <div className="form-group row text-center">
                    <div className="col-md-12 col-sm-10">
                        <button type="submit" className="btn btn-lg btn-primary">
                            Send the form
                        </button>
                    </div>
                </div>
            </div>


        </form>
    )
}

export default FormInputs
