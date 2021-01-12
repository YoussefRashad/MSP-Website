import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Comments from '../components/Comments/Comments'

import LoadingComponent from '../components/LoadingComponent'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import ShowVideo from '../components/SingleVideo/ShowVideo'
import { VideosContext } from '../context/Videos'
import { submitVideoComment } from '../Node/Videos'

const SingleVideo = () => {
    const { getVideoByID } = useContext(VideosContext)
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
