import React from 'react'
import { VideosContext } from '../../../context/Videos'

const DeleteFormInput = () => {
    const { videos } = React.useContext(VideosContext)
    const [videoIDSearch, setVideoIDSearch] = React.useState('')
    const getAllVideosName = () => {
        return videos.map((video, index) => <option value={video.id} key={index}>{video.title}</option>)
    }

    const handleClick = () => {

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
            
            {/* Delete Item */}
            <div className="row mt-3">
                {
                    videoIDSearch &&
                    <div className="col-md-6 col-12 form-group m-auto text-center">
                        <button
                            onClick={handleClick}
                            className="btn btn-danger btn-lg"
                        >
                            Delete
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default DeleteFormInput
