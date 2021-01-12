import Axios from 'axios'
import React, { useState, useEffect } from 'react'

import { BE_URL } from '../utils/URL'
import DEFAULT_IMAGE from '../assets/images/products/speaker-1.jpg'

export const SponserContext = React.createContext()

function SponserProvider({ children }) {

    const [sponsers, SetSponsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getSponsers = async ()=>{
            try{
                const response = await Axios(`${BE_URL}/sponsers`)
                const { data: sponsers } = response
                if (sponsers) {
                    const newSponsers = sponsers.map((sponser) => {
                        const {
                            link,
                            name,
                            _id,
                            createdAt,
                            image
                        } = sponser;
                        const created = new Date(createdAt).toUTCString()
                        return { name, id: _id, link, created, 
                            img: image || DEFAULT_IMAGE }
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
