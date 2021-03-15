import React, { useState } from 'react';
import About from '../components/About';
import Card from '../components/Card';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Work from '../components/Work';
import WorkCard from '../components/WorkCard';


const Home = () => {

    const [isOpen, setisOpen] = useState(false)

    const toggle = () => {
        setisOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <About>
                <Card />
            </About>
            <Work>
                <WorkCard></WorkCard>
            </Work>
            <Clients />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;
