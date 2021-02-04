import React, { useState, useEffect } from 'react'
import getMyAccount from '../Node/getMyAccount';

export const UserContext = React.createContext()
const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [isUser, setIsUser]= useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [height, setHeight] = useState(0)
    const [loading, setLoading] = useState(false)
    // for waiting when fetching all data, using in all contexts only
    const [higherLoading, setHigherLoading] = useState(false)

    // Scroll up
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHeight(window.pageYOffset);
        })
        return () => { window.removeEventListener("scroll", () => { }) }
    }, [height])

    useEffect(() => {
        setHigherLoading(true)
        setLoading(true)
        const fetchUserData = async ()=>{
            const localUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null

            if (localUser) {
                const response = await getMyAccount(localUser)
                if (response.status === 200) {
                    // i use this structure because the BE return just user not token and i have already a token in local storage and i make sure it is available and correct 
                    setUser({ ...response.data, token: localUser })
                    setIsUser(true)
                    setIsAdmin(response.data.email === 'youssef@admin.com')
                } else {
                    localStorage.removeItem("user")
                    setIsUser(false)
                    showAlert({ msg:"Unauthorized logged, please re-login again !", type:"danger"})
                    setHigherLoading(false)
                    setLoading(false)
                    setIsAdmin(false)
                    return {}
                }
            } else {
                setIsUser(false)
                setHigherLoading(false)
                console.log("false");
                return {}
            }
        }
        fetchUserData();
        setLoading(false)

    }, [])

    const userLogin = (user)=>{
        setLoading(true)
        setUser(user)
        setIsUser(true)
        setIsAdmin(user.user.email === 'youssef@admin.com')
        localStorage.setItem("user", JSON.stringify({ token: user.token }))
        setLoading(false)
    }

    const userLogout = ()=>{
        setLoading(true)
        setUser({})
        setIsUser(false)
        setIsAdmin(false)
        localStorage.removeItem("user")
        setLoading(false)
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
            isAdmin,
            userLogout,
            alert,
            showAlert,
            hideAlert,
            height,
            higherLoading,
            setHigherLoading,
            loading,
            setLoading
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
