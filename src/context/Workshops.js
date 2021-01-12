import React, { useState, useEffect } from 'react'

import { BE_URL } from '../utils/URL'
import DEFAULT_IMAGE from '../assets/images/products/speaker-1.jpg'
import flattenImages from '../utils/flattenIimages.js'

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
                const response = await Axios.get(`${BE_URL}/workshops`)
                const { data: workshops } = response;
                if (workshops) {
                    flattenImages(workshops)
                    const newWorkshops = workshops.map((team) => {
                        const {
                            title,
                            description,
                            _id,
                            createdAt,
                            feature,
                            image
                        } = team;
                        const created = new Date(createdAt).toUTCString()
                        const returnedObj = { title, id: _id, description, 
                            created, img: image || DEFAULT_IMAGE, feature }

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
    }, [])

    const getWorkshopsByTerm = (searchTerm) => {
        return workshops.filter(workshop => (
            workshop.title.toLowerCase().includes(searchTerm.toLowerCase())
            || workshop.description.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }
    const getWorkshopByID = (ID) => workshops.find(workshop => workshop.id === ID)

    return (
        <WorkshopContext.Provider
            value={{
                workshops,
                loading,
                featureWorkshops,
                getWorkshopsByTerm,
                getWorkshopByID
            }}
        >
            { children }
        </WorkshopContext.Provider>
    )
}

export default WorkshopProvider
