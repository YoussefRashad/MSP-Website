import React, { useState, useEffect } from 'react'
import LoadingComponent from '../components/LoadingComponent'
import UserForm from '../components/UserForm'

const Login = () => {
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
        return ()=>{}
    }, [])

    if(loading){
        return <LoadingComponent />
    }

    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
                <div className="breadcrumb">
                    <h1 style={{ fontSize: "xx-large" }}>Forms</h1>
                </div>
                <div className="separator-breadcrumb border-top"></div>

                <div className="card-body msContant">
                    
                    <main className="row">
                        <div className="col-md-12 msContant">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div>
                                        <div className="card-title mb-3">Welcome on the Board!</div>
                                        <UserForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>

            </div>
        </div>
    )
}

export default Login