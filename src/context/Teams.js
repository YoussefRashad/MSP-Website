import React, { useState, useEffect } from 'react'

import { BE_URL } from '../utils/URL'
import DEFAULT_IMAGE from '../assets/images/products/speaker-1.jpg'
import flattenImages from '../utils/flattenIimages.js'
import Axios from 'axios'
import { UserContext } from './User'

export const TeamContext = React.createContext()

function TeamProvider({ children }) {

    const { setHigherLoading } = React.useContext(UserContext)
    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setHigherLoading(true)
        const getTeams = async () => {
            try {
                const response = await Axios(`${BE_URL}/user/crew`)
                const { data: teams } = response
                if (teams) {
                    flattenImages(teams)
                    const newTeams = teams.map((team) => {
                        const {
                            userName,
                            quote,
                            _id,
                            createdAt,
                            season,
                            privilage,
                            image,
                            feature
                        } = team;
                        const created = new Date(createdAt).toUTCString()
                        return {
                            userName, id: _id, quote, season, position: privilage.positionType, feature, created, img: image || DEFAULT_IMAGE }
                    })
                    setTeams([...newTeams])
                } else {
                    setTeams([])
                }
            } catch (error) {
                console.log("not connected >> ", error);
            }
            setLoading(false)
            setHigherLoading(false)
        }
        getTeams()
        return () => { }
    }, []);

    const getMembersByTerm = (searchTerm)=>{
        return teams.filter(member => (
            member.userName.toLowerCase().includes(searchTerm.toLowerCase())
            || member.quote.toLowerCase().includes(searchTerm.toLowerCase())
            || member.season.toLowerCase().includes(searchTerm.toLowerCase())
            || member.position.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }
    
    return (
        <TeamContext.Provider
            value={{
                teams,
                loading,
                getMembersByTerm
            }}
        >
            { children}
        </TeamContext.Provider>
    )
}

export default TeamProvider
