import React, { useState, useEffect } from 'react'

import { BE_URL } from '../utils/URL'

import imageLocal from '../utils/dataImages'

import Axios from 'axios'

export const TeamContext = React.createContext()

function TeamProvider({ children }) {

    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getTeams = async () => {
            try {
                const response = await Axios(`${BE_URL}/team-members`)
                const { data: teams } = response
                if (teams) {
                    let counterImages = 0;
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
                        return { name, idTeam: _id, word, season, position, 
                            created, img: imageLocal[counterImages++] }
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
    }, []);

    const getMembersByTerm = (searchTerm)=>{
        return teams.filter(member => (
            member.name.toLowerCase().includes(searchTerm.toLowerCase())
            || member.word.toLowerCase().includes(searchTerm.toLowerCase())
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
