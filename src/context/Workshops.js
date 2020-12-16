import React, { useState, useEffect } from 'react'

import URL from '../utils/URL'

import Img1 from '../assets/images/products/speaker-1.jpg'
// import Img2 from '../assets/images/products/headphone-1.jpg'
// import Img3 from '../assets/images/products/headphone-2.jpg'
// import Img4 from '../assets/images/products/headphone-3.jpg'
// import Img5 from '../assets/images/products/headphone-4.jpg'
// import Img6 from '../assets/images/products/iphone-1.jpg'
// import Img7 from '../assets/images/products/speaker-2.jpg'
// import Img8 from '../assets/images/products/watch-1.jpg'
import Axios from 'axios'


export const WorkshopContext = React.createContext()

function WorkshopProvider({ children }) {


    const [workshops, setWorkshops] = useState([])
    const [featureWorkshops, setFeatureWorkshops] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        const getWorkshops = async ()=> {
            try{
                const response = await Axios.get(`${URL}/workshops`)
                const { data: workshops } = response;
                if (workshops) {
                    const newWorkshops = workshops.map((team) => {
                        const {
                            title,
                            description,
                            _id,
                            createdAt,
                            feature
                        } = team;
                        const created = new Date(createdAt).toUTCString()
                        const defaultImg = Img1;

                        const returnedObj = { title, idWorkshop: _id, description, created, img: defaultImg, feature }

                        if (feature) {
                            setFeatureWorkshops([...featureWorkshops, returnedObj])
                        }
                        return returnedObj;
                    })
                    setWorkshops([...newWorkshops])
                } else {
                    setWorkshops([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
        }
        getWorkshops()
        return () => {}
    }, [])

    const getWorkshop = (id)=> workshops.find(workshop => workshop.idWorkshop === id)
    return (
        <WorkshopContext.Provider
            value={{
                workshops,
                loading,
                featureWorkshops,
                getWorkshop
            }}
        >
            { children }
        </WorkshopContext.Provider>
    )
}

export default WorkshopProvider
