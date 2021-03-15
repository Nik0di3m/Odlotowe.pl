import React from 'react'
import { HeroBg, HeroContainer, HeroImg, HeroPath, HeroText, HeroItems, Button, HeroBlur, HeroH1, HeroH2, HeroH3 } from './HeroElements';
import Path from '../../images/Path 1.svg';
import Image from '../../images/hero-img.svg'
import Blur from '../../images/hero-blur.svg'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <HeroItems>
                    <HeroBlur>
                        <img src={Blur} className="hero-blur" alt="contet" />
                    </HeroBlur>
                    <HeroText>
                        <HeroH1>Spełnij marzenie!</HeroH1>
                        <HeroH2>Odlotowa strona na wyciągniecie ręki!</HeroH2>
                        <HeroH3>Jesteśmy dla Ciebie, dla Twoich potrzeb, dla Twojej strony.</HeroH3>
                        <Button>Startujemy!</Button>
                    </HeroText>

                    <HeroImg>
                        <img src={Image} className="hero-img" alt="content" />
                    </HeroImg>
                </HeroItems>

                <HeroPath>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </HeroPath>
            </HeroBg>
        </HeroContainer>
    )
}

export default Hero;
