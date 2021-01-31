import React, { useState, useEffect } from 'react'
import { getVideosFromBE } from '../Node/Videos'
import DEFAULT_IMAGE from '../assets/images/products/speaker-1.jpg'
import { UserContext } from './User'

export const VideosContext = React.createContext()
const VideosProvider = ({ children }) => {

    const { setHigherLoading } = React.useContext(UserContext)
    const [videos, setVideos] = useState([])
    const [featureVideos, setFeatureVideos] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedVideos, setSelectedVideos] = useState([])


    useEffect(() => {
        setLoading(true)
        setHigherLoading(true)
        const fetchVideos = async () => {
            try{
                const response = await getVideosFromBE()
                const {data:videos} = response

                if(videos){
                    formatTheVideos(videos)

                    let arr = []
                    const newVideos = videos.map(video =>{
                        const {
                            _id,
                            title,
                            link,
                            description,
                            attatchement,
                            committee,
                            defaultImage,
                            comments,
                            createdAt,
                            feature
                        } = video;

                        const created = new Date(createdAt).toUTCString()
                        const overallRate = comments.reduce((acc, curr) => {
                            if (curr.rate) {
                                return acc += (+curr.rate)
                            } else {
                                return acc += 0;
                            }
                        }, 0)
                        const returendOverallRated = !comments.length ? 0 : overallRate / comments.length;
                        const returnedObj = {
                            title, id: _id, description, created,
                            img: defaultImage || DEFAULT_IMAGE, feature,
                            comments, overallRate: Math.round(returendOverallRated),
                            committee, link, attatchement
                        }

                        returnedObj.feature && arr.push(returnedObj)

                        return returnedObj
                    })
                    setVideos(newVideos)
                    setFeatureVideos(arr)
                }else{
                    setVideos([])
                }
            }catch(error){
                console.log("not connected >> ", error.message);
            }
            setLoading(false)
            setHigherLoading(false)
        }
        fetchVideos()
    }, [])
    
    const formatTheVideos = (videos) => {
        return videos.map((video) => {
            video.defaultImage = video.defaultImage.includes("thumbnail?id=", 25) ?
                video.defaultImage : 'https://drive.google.com/thumbnail?id=' + video.defaultImage.substring(32, 65);
            video.link = video.link.includes("preview", 66) ? video.link :
                video.link.substring(0, 65) + '/preview';
            return video
        })
    }

    const setCommitteesVideos = ( committeeName )=>{
        setLoading(true)
        setSelectedVideos(videos.filter(video => video.committee.toLowerCase() === committeeName))
        setLoading(false)
    }

    const getVideoByID = (ID)=>{
        setLoading(true)
        const video = videos.find(video => ID === video.id)
        setLoading(false)
        return video
    }

    const getVideosByTerm = (searchTerm)=>{
        return videos.filter(video =>(
            video.title.toLowerCase().includes(searchTerm.toLowerCase())
            || video.link.toLowerCase().includes(searchTerm.toLowerCase())
            || video.description.toLowerCase().includes(searchTerm.toLowerCase())
            || video.committee.toLowerCase().includes(searchTerm.toLowerCase())
            || video.img.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }

    
    return (
        <VideosContext.Provider value={{
            videos,
            selectedVideos,
            featureVideos,
            loading,
            setCommitteesVideos,
            getVideoByID,
            getVideosByTerm
        }}>
            {children}
        </VideosContext.Provider>
    )
}

export default VideosProvider
