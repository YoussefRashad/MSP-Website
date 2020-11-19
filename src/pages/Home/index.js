import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import MsHeaderHome from './styledHero'
import Hero from '../../assets/images/msBG.png'

// Components
import HomeComponent from '../../components/Home'
import Sponsors from '../../components/Sponsors'
import WebTeam from '../../components/WebTeam'

function Home() {
    return (
        <div className="d-flex flex-column msContant">
            <MsHeaderHome img={Hero}>
                <div className="msContent2">
                    <div className="msText">
                        <h1 className="msHeaderText msHeaderText1">When technology</h1>
                        <h1 className="msHeaderText msHeaderText2">becomes an absolute</h1>
                        <h1 className="msHeaderText msHeaderText3">Passion.</h1>
                    </div>
                    <div className="msButton">
                        <button className="msHeaderButton btn btn-lg btn-outline-primary m-1">Who Are WE? </button>
                    </div>
                </div>
            </MsHeaderHome>

            <HomeComponent />

            <div style={{backgroundColor: "#1c546f", marginBottom: "30px"}}>
                <div className="msMain" style={{paddingBottom: "0px"}}>
                    <h1 className="text-center" style={{margin: "100px 0px"}}>
                        <Link to="/member-work" style={{color: "white"}} className="msAnchorHover text-decoration-none">Take a Look on our Members Work</Link>
                    </h1>
                </div>
            </div>


            <Sponsors />
            <WebTeam /> 
            
        </div>
    )
}

export default Home