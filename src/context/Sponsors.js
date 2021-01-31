import Axios from 'axios'
import React, { useState, useEffect } from 'react'

import { BE_URL } from '../utils/URL'
import DEFAULT_IMAGE from '../assets/images/products/speaker-1.jpg'
import flattenImages from '../utils/flattenIimages.js'
import { UserContext } from './User'

export const SponsorContext = React.createContext()

function SponsorProvider({ children }) {

    const { setHigherLoading } = React.useContext(UserContext)
    const [sponsors, SetSponsors] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setHigherLoading(true)
        const getSponsors = async ()=>{
            try{
                const response = await Axios(`${BE_URL}/sponsors`)
                const { data: sponsors } = response
                if (sponsors) {
                    flattenImages(sponsors)
                    const newSponsors = sponsors.map((sponsor) => {
                        const {
                            link,
                            name,
                            _id,
                            createdAt,
                            image
                        } = sponsor;
                        const created = new Date(createdAt).toUTCString()
                        return { name, id: _id, link, created, 
                            img: image || DEFAULT_IMAGE }
                    })
                    SetSponsors([...newSponsors])
                } else {
                    SetSponsors([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
            setHigherLoading(false)
        }
        getSponsors()
        return () => {}
    }, [])

    const getSponsorsByTerm = (searchTerm) => {
        return sponsors.filter(sponsor => (
            sponsor.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }
    return (
        <SponsorContext.Provider 
            value={{
                sponsors,
                loading,
                getSponsorsByTerm
            }}
        >
            { children }
        </SponsorContext.Provider>
    )
}

export default SponsorProvider
