import React from 'react'
import Flame from '../../images/flame-success.svg';
import { AboutContiner, AboutH1, AboutImg, AboutInfoContainer, AboutTitle } from './AboutElements';
const About = (props) => {
    return (
        <AboutContiner>
            <AboutTitle>
                <AboutH1>
                    Kim Jesteśmy?
                </AboutH1>
            </AboutTitle>
            <AboutInfoContainer>
                <AboutImg>
                    <img src={Flame} alt="content" className="flame-img" />
                </AboutImg>
                {props.children}
            </AboutInfoContainer>
        </AboutContiner>
    )
}

export default About;
