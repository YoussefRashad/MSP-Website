import React, { useState, useEffect } from 'react'

import URL from '../utils/URL'

import Img1 from '../assets/images/faces/12.jpg'
// import Img2 from '../assets/images/faces/13.jpg'
// import Img3 from '../assets/images/faces/2.jpg'
// import Img4 from '../assets/images/faces/4.jpg'
// import Img5 from '../assets/images/faces/10.jpg'
// import Img6 from '../assets/images/faces/16.jpg'
import Axios from 'axios'

export const TeamContext = React.createContext()

function TeamProvider({ children }) {

    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getTeams = async () => {
            try {
                const response = await Axios(`${URL}/team-members`)
                const { data: teams } = response
                if (teams) {
                    const newTeams = teams.map((team) => {
                        const {
                            name,
                            word,
                            _id,
                            createdAt,
                            season,
                            position
                        } = team;
                        const created = new Date(createdAt).toUTCString()
                        const defaultImg = Img1;
                        return { name, idTeam: _id, word, season, position, created, img: defaultImg }
                    })
                    setTeams([...newTeams])
                } else {
                    setTeams([])
                }
            } catch (error) {
                console.log("not connected >> ", error);
            }
            setLoading(false)
        }
        getTeams()
        return () => { }
    }, [])
    return (
        <TeamContext.Provider
            value={{
                teams,
                loading
            }}
        >
            { children}
        </TeamContext.Provider>
    )
}

export default TeamProvider
