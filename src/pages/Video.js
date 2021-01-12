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

    const [selectedItem, setSelectedItem] = React.useState({
        technical: false,
        operational: false,
        marketing: false
    })

    const clickedItem = (section)=>{
        if(section === 'technical'){
            setSelectedItem({ 
                ...selectedItem,
                technical: !selectedItem.technical
            })
        } else if (section === 'operational'){
            setSelectedItem({
                ...selectedItem,
                operational: !selectedItem.operational
            })
        }else if(section === 'marketing'){
            setSelectedItem({
                ...selectedItem,
                marketing: !selectedItem.marketing
            })
        }
    }
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
                                    Sign
                                </Link>
                            </span>
                            }
                        </h3>

                        <div>
                            <ul className="iteamP webList">
                                <li 
                                    className={`iteam ${selectedItem.technical ? 'parent': ''}`}
                                    style={{padding: '12px 10px'}}
                                    onClick={() => clickedItem('technical')}
                                >
                                    <Accordation 
                                        title={"Technical Section"}
                                        committes={[
                                            { id: 0, title: 'preparation', name: 'preparation' },
                                            { id: 1, title: 'flutter', name: 'flutter'},
                                            { id: 2, title: 'game development', name: 'gameDevelopment'},
                                            { id: 3, title: 'data science', name: 'dataScience' }
                                        ]}
                                        setPage={setPage}
                                    />
                                </li>
                                <li
                                    className={`iteam ${selectedItem.operational ? 'parent': ''}`}
                                    style={{ padding: '12px 10px' }}
                                    onClick={() => clickedItem('operational')}
                                >
                                    <Accordation 
                                        title={"Operational Section"} 
                                        committes={[
                                            { id: 4, title: 'human resources', name: 'humanResources'},
                                            { id: 5, title: 'quality assurance', name: 'qualityAssurance' },
                                            { id: 6, title: 'logistics', name: 'logistics' }
                                        ]}
                                        setPage={setPage}
                                    />
                                </li>
                                <li
                                    className={`iteam ${selectedItem.marketing ? 'parent': ''}`}
                                    style={{ padding: '12px 10px' }}
                                    onClick={() => clickedItem('marketing')}
                                >
                                    <Accordation 
                                        title={"Marketing Section"} 
                                        committes={[
                                            { id: 7, title: 'graphic design', name: 'graphicDesign' },
                                            { id: 8, title: 'photography & video production', name: 'PV' },
                                            { id: 9, title: 'digital marketing', name: 'digitalMarketing' }
                                        ]}
                                        setPage={setPage}
                                    />
                                </li>
                            </ul>
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