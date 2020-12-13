import React from 'react'

import MsHeaderHome from './styledHero'
import Logo from '../../assets/images/msBG.png'
import { Banner } from './Banner'

export const Hero = () => {
    return (
        <MsHeaderHome img={Logo}>
            <Banner />
        </MsHeaderHome>
    )
}
