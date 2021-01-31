import React, { useState, useEffect } from 'react'

import { UserContext } from '../../../context/User'
import { VideosContext } from '../../../context/Videos'

const UpdateFormInput = () => {

    const { showAlert, alert } = React.useContext(UserContext)
    const { videos } = React.useContext(VideosContext)

    const [videoIDSearch, setVideoIDSearch] = useState('')
    const [video, setVideo] = useState({})

    const [loading, setLoading] = useState(false);
    // const isEmpty = !title || !author || !image || !description || !feature || alert.show


    // get selected video
    useEffect(() => {
        setLoading(true)
        setVideo(videos.find(video => video.id === videoIDSearch))
        setLoading(false)
    }, [videoIDSearch])


    const getAllVideosName = () => {
        return videos.map((video, index) => <option value={video.id} key={index}>{video.title}</option>)
    }

    const getCommitteeData = () => {
        return (
            <>
                <option value="preparation">Preparation</option>
                <option value="flutter">Flutter</option>
                <option value="game development">Game Development</option>
                <option value="data science">Data Science</option>
                <option value="human resources">Human Resources</option>
                <option value="quality assurance">Quality Assurance</option>
                <option value="logistics">Logistics</option>
                <option value="graphic design">Graphic Design</option>
                <option value="photography & video production">Photography & Video Production</option>
                <option value="digital marketing">Digital Marketing</option>
            </>
        )
    }

    return (
        <div>

            <div className="row">
                {/* <!-- Feature --> */}
                <div className="col-md-6 col-12 form-group mb-3 m-auto text-center">
                    <label htmlFor="feature">Search by name</label>
                    <select
                        className="custom-select mr-sm-2"
                        id="feature"
                        value={videoIDSearch}
                        onChange={(e) => setVideoIDSearch(e.target.value)}
                    >
                        <option hidden>Choose...</option>
                        {getAllVideosName()}
                    </select>
                </div>
            </div>

            {/* Fetched form data */}
            {
                video &&
                <div className="row">
                    <div className="col-md-6 col-12 form-group mb-3">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            id="title"
                            value={video.title}
                            onChange={(e) => setVideo({ ...video, title: e.target.value })}
                            autoFocus
                        />
                    </div>

                    {/* <!-- link --> */}
                    <div className="col-md-6 col-12 form-group mb-3">
                        <label htmlFor="link">Video Link</label>
                        <input
                            type="text"
                            id="link"
                            className="form-control"
                            required
                            value={video.link}
                            onChange={(e) => setVideo({ ...video, link: e.target.value })}
                        />
                    </div>

                    {/* <!-- Image --> */}
                    <div className="col-md-6 col-12 form-group mb-3">
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            id="image"
                            className="form-control"
                            required
                            value={video.img}
                            onChange={(e) => setVideo({ ...video, img: e.target.value })}
                        />
                        <small id="passwordHelpInline" className="text-muted">
                            Must be from Google Drive.
                    </small>
                    </div>

                    {/* <!-- committee --> */}
                    <div className="col-md-6 col-12 form-group mb-3">
                        <label htmlFor="committee">Committee</label>
                        <select
                            className="custom-select mr-sm-2"
                            id="committee"
                            value={video.committee ? video.committee.toLowerCase() : ''}
                            onChange={(e) => setVideo({ ...video, committee: e.target.value })}
                        >
                            <option defaultValue="preparation" disabled>Choose...</option>
                            {getCommitteeData()}
                        </select>
                    </div>

                    {/* <!-- Feature --> */}
                    <div className="col-md-6 col-12 form-group mb-3">
                        <label htmlFor="feature">Feature</label>
                        <select
                            className="custom-select mr-sm-2"
                            id="feature"
                            value={video.feature}
                            onChange={(e) => setVideo({ ...video, feature: e.target.value })}
                        >
                            <option defaultValue="false" hidden>Choose...</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="col-12 form-group mb-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="textarea"
                            id="description"
                            className="form-control"
                            cols="30"
                            rows="5"
                            required
                            value={video.description}
                            onChange={(e) => setVideo({ ...video, description: e.target.value })}
                        />
                    </div>
                </div>

            }

        </div>
    )
}

export default UpdateFormInput
