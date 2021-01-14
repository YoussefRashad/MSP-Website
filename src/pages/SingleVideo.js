import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Comments from '../components/Comments/Comments'
import LoadingComponent from '../components/LoadingComponent'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import ShowVideo from '../components/SingleVideo/ShowVideo'
import { VideosContext } from '../context/Videos'
import { UserContext } from '../context/User'
import { submitVideoComment } from '../Node/Videos'

const SingleVideo = () => {
    const history = useHistory()

    const { getVideoByID } = useContext(VideosContext)
    const { isUser, showAlert } = useContext(UserContext)

    const { id } = useParams()
    const [video, setVideo] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState([])

    // fetech the video
    useEffect(() => {
        setLoading(true)
        const video = getVideoByID(id)
        setVideo(video)
        setComments(video.comments)
        setLoading(false)
        return () => { }
    }, [])
    // scroll up
    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])


    if (!isUser) {
        // re render into home page & show alert
        showAlert({
            msg: "you are not have a permission to do that, your access is denaied !",
            type: "info"
        })
        history.push('/videos')
    }
    
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
                {
                    loading ? <LoadingComponent />
                        :
                    !video ? <h2 className="section-title">no video to display</h2>
                        :
                    <div>
                        <ShowVideo video={video} />
                        <Comments
                            id={video.id}
                            comments={comments}
                            setComments={setComments}
                            submitComment={submitVideoComment}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default SingleVideo
