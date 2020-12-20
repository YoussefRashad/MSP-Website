import Axios from 'axios'
import React, { useState, useEffect } from 'react'

import URL from '../utils/URL'

import imageLocal from '../utils/dataImages'

export const SponserContext = React.createContext()

function SponserProvider({ children }) {

    const [sponsers, SetSponsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getSponsers = async ()=>{
            try{
                const response = await Axios(`${URL}/sponsers`)
                const { data: sponsers } = response
                if (sponsers) {
                    let counterImages = 0;
                    const newSponsers = sponsers.map((sponser) => {
                        const {
                            link,
                            name,
                            _id,
                            createdAt
                        } = sponser;
                        const created = new Date(createdAt).toUTCString()
                        return { name, idSponser: _id, link, created, 
                            img: imageLocal[counterImages++] }
                    })
                    SetSponsers([...newSponsers])
                } else {
                    SetSponsers([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
        }
        getSponsers()
        return () => {}
    }, [])

    const getSponsersByTerm = (searchTerm) => {
        return sponsers.filter(sponser => (
            sponser.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }
    return (
        <SponserContext.Provider 
            value={{
                sponsers,
                loading,
                getSponsersByTerm
            }}
        >
            { children }
        </SponserContext.Provider>
    )
}

export default SponserProvider
