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

export const EventContext = React.createContext()

function EventProvider({ children }) {

    const [events, setEvents] = useState([])
    const [featureEvents, setFeatureEvents] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const getEvents = async ()=>{
            try{
                const response = await Axios.get(`${URL}/events`);
                const { data: events } = response;
                if (events) {
                    const newEvents = events.map((event) => {
                        const {
                            location,
                            description,
                            title,
                            _id,
                            createdAt,
                            feature
                        } = event;
                        const created = new Date(createdAt).toUTCString()
                        const defaultImg = Img1;

                        const returnedObj = { title, idEvent: _id, location, description, created, img: defaultImg, feature }

                        if (feature) {
                            setFeatureEvents([...featureEvents, returnedObj])
                        }
                        return returnedObj;
                    })
                    setEvents(newEvents)
                } else {
                    setEvents([])
                }
            }catch(error){
                console.log("not connected >> ", error);
            }
            setLoading(false)
        }
        getEvents()
        return () => {}
    }, [])

    const getEvents = (id) => events.find(event => event.idEvent === id)

    return (
        <EventContext.Provider
            value = {{
                events,
                featureEvents,
                loading,
                getEvents
            }}
        >
            {children}
        </EventContext.Provider>
    )
}

export default EventProvider