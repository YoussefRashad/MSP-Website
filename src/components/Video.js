import React from 'react'

const VideoComponent = () => {
    return (
        <div className="msMain">
            <div>
                <div className="row">
                    <div className="col-lg-4 list">
                        <h3 className="tutorialname">tutorialname <span className="text-right sign"
                        >sign</span></h3>
                        <div>
                            <ul className="iteamP mobList">
                                <li className="iteam parent">
                                    video.name<br />
                                </li>
                                <li className="iteam">
                                    video.name <br />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="iteamP webList">
                                <li className="iteam parent">
                                    video.name<br />
                                </li>
                                <li className="iteam">
                                    video.name <br />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br /><br />
                    <div className="col-lg-8 view">
                        <div>
                            <h2>
                                parentVideo.name
                    </h2>
                            <div></div> <br />
                    parentVideo.description <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoComponent

/*

*/