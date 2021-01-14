import React from 'react'
import { useHistory } from 'react-router-dom'

import { UserContext } from '../context/User'
import Error from './Error'

const Profile = () => {
    const { isUser, showAlert } = React.useContext(UserContext)
    const history    = useHistory()

    if(!isUser){
        // re render into home page & show alert
        showAlert({
            msg: "you are not have a permission to do that, your access is denaied !",
            type: "info"
        })
        history.push('/')
    }
    return (
        <div>
            <Error title="Sorry! The page you were looking for under maintenance." />
        </div>
    )
}

export default Profile
