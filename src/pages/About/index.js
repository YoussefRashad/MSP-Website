import React from 'react'
import EventsComponent from '../../components/Events'
import TeamComponent from '../../components/Team'

const About = () => {
    return (
        <div class="d-flex flex-column msContant">
            <EventsComponent />
            <TeamComponent />
        </div>
    )
}

export default About