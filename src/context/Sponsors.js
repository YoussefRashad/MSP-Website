import Axios from 'axios'
import React, { useState, useEffect } from 'react'

import URL from '../utils/URL'

import Img1 from '../assets/images/products/headphone-1.jpg'
// import Img2 from '../assets/images/products/headphone-3.jpg'
// import Img3 from '../assets/images/products/headphone-4.jpg'
// import Img4 from '../assets/images/products/iphone-1.jpg'

export const SponsorContext = React.createContext()

function SponsorProvider({ children }) {

    const [sponsors, SetSponsors] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getSponsors = async ()=>{
            try{
                const response = await Axios(`${URL}/sponsors`)
                const { data: sponsors } = response
                if (sponsors) {
                    const newSponsors = sponsors.map((sponsor) => {
                        const {
                            link,
                            name,
                            _id,
                            createdAt
                        } = sponsor;
                        const created = new Date(createdAt).toUTCString()
                        const defaultImg = Img1;
                        return { name, idSponsor: _id, link, created, img: defaultImg }
                    })
                    SetSponsors([...newSponsors])
                } else {
                    SetSponsors([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
        }
        getSponsors()
        return () => {}
    }, [])
    return (
        <SponsorContext.Provider 
            value={{
                sponsors,
                loading
            }}
        >
            { children }
        </SponsorContext.Provider>
    )
}

export default SponsorProvider
