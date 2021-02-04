import React from 'react'
import { UserContext } from '../../../context/User'
import { VideosContext } from '../../../context/Videos'
import { DELETE } from '../../../Node/Dashboard'
import { VIDEO } from '../../../utils/EndPoints'
import LoadingComponent from '../../LoadingComponent'

const DeleteFormInput = () => {
    const { videos } = React.useContext(VideosContext)
    const [videoIDSearch, setVideoIDSearch] = React.useState('')
    const getAllVideosName = () => {
        return videos.map((video, index) => <option value={video.id} key={index}>{video.title}</option>)
    }

    const { showAlert } = React.useContext(UserContext)
    const [loading, setLoading] = React.useState(false)

    const handleClick = async (e) => {
        e.preventDefault()
        setLoading(false)
        try {
            await DELETE({ id: videoIDSearch, path: VIDEO })
            setTimeout(() => {
                setVideoIDSearch('')
                setLoading(false);
                showAlert({ show: true, type: 'success', msg: 'delete your item successfully' })
            }, 1000);
        } catch (error) {
            setTimeout(() => {
                setVideoIDSearch('')
                setLoading(false);
                showAlert({ show: true, type: 'danger', msg: 'there is an error, please try later ..' })
            }, 1000);
        }
    }

    if (loading) {
        return <LoadingComponent />
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
                            Delete Video
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}

export default DeleteFormInput
