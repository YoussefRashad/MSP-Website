import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Sponsors from '../components/Sponsers'
import WebTeam from '../components/WebTeam'
import { Hero } from '../components/Banner/Hero'
import Articles from './Articles';
import Events from './Events'

function Home() {
    return (
        <div className="d-flex flex-column msContant">
            
            <Hero />
            <Articles />
            <Events />

            <div style={{backgroundColor: "#1c546f", marginBottom: "30px"}}>
                <div className="msMain" style={{paddingBottom: "0px"}}>
                    <h1 className="text-center" style={{margin: "100px 0px"}}>
                        <Link to="/member-work" style={{color: "white"}} className="msAnchorHover ">Take a Look on our Members Work</Link>
                    </h1>
                </div>
            </div>
            
            <Sponsors />
            <WebTeam /> 
            
        </div>
    )
}

export default Home