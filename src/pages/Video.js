import React, { useState, useEffect, useContext } from 'react'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import Accordation from '../components/videos/Accordation'
import { Link } from 'react-router-dom'
import VideosShow from '../components/videos/VideosShow'
import { UserContext } from '../context/User'

const Video = () => {
    const { isUser} = useContext(UserContext)

    const [videos, setVideos] = useState([])

    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])
    
    /*
        technical: ['prepartion', 'flutter', 'game development', 'data science'], // 4
        operational: ['human resources', 'quality assurance', 'logistics'],      // 3
        marketing: ['graphic design', 'photography & video production',         // 3
                                'digital marketing']
    */
    return (
        <div className="d-flex flex-column msContant">
            <div className="msMain">
                <div className="row">
                    {/* Sections Views */}
                    <div className="col-lg-4 list">
                    
                        <h3 className="tutorialname">Sections 
                            {
                                !isUser &&
                            <span className="text-right sign">
                                <Link
                                    to="/login"
                                >
                                    Sign
                                </Link>
                            </span>
                            }
                        </h3>

                        <div>
                            <ul className="iteamP webList">
                                <li className="iteam parent" style={{padding: '12px 10px'}}>
                                    <Accordation 
                                        title={"Technical Section"} 
                                        committes={['prepartion', 'flutter', 'game development', 'data science']}
                                    />
                                </li>
                                <li className="iteam" style={{ padding: '12px 10px' }}>
                                    <Accordation 
                                        title={"Operational Section"} 
                                        committes={['human resources', 'quality assurance', 'logistics']}
                                    />
                                </li>
                                <li className="iteam" style={{ padding: '12px 10px' }}>
                                    <Accordation 
                                        title={"Marketing Section"} 
                                        committes={['graphic design', 'photography & video production', 'digital marketing']}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br /><br />

                    <div className="col-lg-8 view">
                        <div>
                            <VideosShow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video