import React, { useState, useEffect } from 'react'
import getMyAccount from '../Node/getMyAccount';

export const UserContext = React.createContext()
const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [isUser, setIsUser]= useState(false)
    const [height, setHeight] = useState(0)

    // Scroll up
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHeight(window.pageYOffset);
        })
        return () => { window.removeEventListener("scroll", () => { }) }
    }, [height])

    useEffect(() => {

        const fetchUserData = async ()=>{
            const localUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null

            if (localUser) {
                const response = await getMyAccount(localUser)
                if (response.status === 200) {
                    // i use this structure because the BE return just user not token and i have already a token in local storage and i make sure it is available and correct 
                    setUser({ ...response.data, token: localUser })
                    setIsUser(true)
                } else {
                    localStorage.removeItem("user")
                    setIsUser(false)
                    showAlert({ msg:"Unauthorized logged, please re-login again !", type:"danger"})
                    return {}
                }
            } else {
                setIsUser(false)
                return {}
            }
        }
        fetchUserData();

    }, [])

    const userLogin = (user)=>{
        setUser(user)
        setIsUser(true)
        localStorage.setItem("user", JSON.stringify({ token: user.token }))
    }

    const userLogout = ()=>{
        setUser({})
        setIsUser(false)
        localStorage.removeItem("user")
    }

    const [alert, setAlert] = useState({
        show: false,
        msg: "",
        type: "success"
    })
    const showAlert = ({ msg, type="success" })=> setAlert({ show: true, msg, type })
    const hideAlert = ()=> setAlert({ ...alert, show: false })
    
    return (
        <UserContext.Provider value={{
            user,
            isUser,
            userLogin,
            userLogout,
            alert,
            showAlert,
            hideAlert,
            height
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
