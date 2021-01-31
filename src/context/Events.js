import React, { useState, useEffect } from 'react'

import { BE_URL } from '../utils/URL'
import flattenImages from '../utils/flattenIimages.js'

import DEFAULT_IMAGE from '../assets/images/products/speaker-1.jpg'
import Axios from 'axios'
import { UserContext } from './User'

export const EventContext = React.createContext()

function EventProvider({ children }) {

    const { setHigherLoading } = React.useContext(UserContext)
    const [events, setEvents] = useState([])
    const [featureEvents, setFeatureEvents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setHigherLoading(true)
        const getEvents = async ()=>{
            try{
                const response = await Axios.get(`${BE_URL}/events`);
                const { data: events } = response;
                if (events) {
                    flattenImages(events)
                    let arr = []
                    const newEvents = events.map((event) => {
                        const {
                            location,
                            description,
                            title,
                            _id,
                            createdAt,
                            feature,
                            image
                        } = event;
                        const created = new Date(createdAt).toUTCString()

                        const returnedObj = { title, id: _id, location, description, created, img: image || DEFAULT_IMAGE, feature }

                        returnedObj.feature && arr.push(returnedObj)

                        return returnedObj;
                    })
                    setEvents(newEvents)
                    setFeatureEvents(arr)
                } else {
                    setEvents([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
            setHigherLoading(false)
        }
        getEvents()
    }, [])

    const getEventsByTerm = (searchTerm) => {
        return events.filter(event => (
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
            || event.description.toLowerCase().includes(searchTerm.toLowerCase())
            || event.location.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }

    const getEventByID = (ID) =>{ 
        setLoading(true)
        const event = events.find(event => event.id === ID)
        setLoading(false)
        return event
    }
    
    return (
        <EventContext.Provider
            value = {{
                events,
                featureEvents,
                loading,
                getEventsByTerm,
                getEventByID
            }}
        >
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider