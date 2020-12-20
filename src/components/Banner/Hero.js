import React from 'react'

import MsHeaderHome from './styledHero'
import Logo from '../../assets/images/MSP/essential/msBG.png'
import { Banner } from './Banner'

export const Hero = () => {
    return (
        <MsHeaderHome img={Logo} className="mb-4">
            <Banner />
        </MsHeaderHome>
    )
}
