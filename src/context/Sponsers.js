import Axios from 'axios'
import React, { useState, useEffect } from 'react'

import URL from '../utils/URL'

import Img1 from '../assets/images/products/headphone-1.jpg'
// import Img2 from '../assets/images/products/headphone-3.jpg'
// import Img3 from '../assets/images/products/headphone-4.jpg'
// import Img4 from '../assets/images/products/iphone-1.jpg'

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
                    const newSponsers = sponsers.map((sponser) => {
                        const {
                            link,
                            name,
                            _id,
                            createdAt
                        } = sponser;
                        const created = new Date(createdAt).toUTCString()
                        const defaultImg = Img1;
                        return { name, idSponser: _id, link, created, img: defaultImg }
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
    return (
        <SponserContext.Provider 
            value={{
                sponsers,
                loading
            }}
        >
            { children }
        </SponserContext.Provider>
    )
}

export default SponserProvider
