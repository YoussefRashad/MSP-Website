import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import Accordation from '../components/videos/Accordation'
import VideosShow from '../components/videos/VideosShow'
import { UserContext } from '../context/User'

const Video = () => {
    const { isUser } = useContext(UserContext)
    const [page, setPage] = React.useState(1)
    const noOfItemsInPage = 6

    // scroll up
    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])

/*
    technical: ['preparation', 'flutter', 'game development', 'data science'], // 4
    operational: ['human resources', 'quality assurance', 'logistics'],      // 3
    marketing: ['graphic design', 'photography & video production', 'digital marketing'] //3
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
                                    Login
                                </Link>
                            </span>
                            }
                        </h3>

                        <div>
                            <Accordation
                                titles={["Technical Section", "Operational Section", "Marketing Section"]}
                                techCommittees={[
                                    { id: 0, title: 'preparation', name: 'preparation' },
                                    { id: 1, title: 'flutter', name: 'flutter' },
                                    { id: 2, title: 'game development', name: 'gameDevelopment' },
                                    { id: 3, title: 'data science', name: 'dataScience' }
                                ]}
                                operationalCommittes={[
                                    { id: 4, title: 'human resources', name: 'humanResources' },
                                    { id: 5, title: 'quality assurance', name: 'qualityAssurance'},
                                    { id: 6, title: 'logistics', name: 'logistics' }
                                ]}
                                marketingCommittes={[
                                    { id: 7, title: 'graphic design', name: 'graphicDesign' },
                                    { id: 8, title: 'photography & video production', name: 'PV' },
                                    { id: 9, title: 'digital marketing', name: 'digitalMarketing' }
                                ]}
                                setPage={setPage}
                            />
                        </div>
                    </div>
                    <br /><br />

                    <div className="col-lg-8 view">
                        <div>
                            <VideosShow page={page} setPage={setPage} noOfItemsInPage={noOfItemsInPage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video