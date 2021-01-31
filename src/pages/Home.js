import React from 'react'

// Components
import Sponsors from '../components/Sponsors'
import WebTeam from '../components/WebTeam/WebTeam'
import { Hero } from '../components/Banner/Hero'
import { scrollAutoFromBackToTop } from '../components/ScrollButton'
import FeatureArticles from '../components/FeatureArticles'
import FeatureEvents from '../components/FeatureEvents'

function Home() {
    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])
    
    return (
        <div className="d-flex flex-column msContant">
            
            <Hero />
            <FeatureArticles />
            <FeatureEvents />

            <div style={{backgroundColor: "#1c546f", marginBottom: "30px"}}>
                <div className="msMain" style={{paddingBottom: "0px"}}>
                    <h1 className="text-center" style={{margin: "100px 0px"}}>
                        {/* <Link to="/member-work" style={{color: "white"}} className="msAnchorHover ">Take a Look on our Members Work</Link> */}
                        <a href="https://github.com/Microsoft-Student-Partner-HU" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} className="msAnchorHover">
                            Take a Look on our Members Work
                        </a>
                    </h1>
                </div>
            </div>
            
            <Sponsors />
            <WebTeam /> 
            
        </div>
    )
}

export default Home