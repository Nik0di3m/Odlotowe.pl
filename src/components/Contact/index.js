import React, { useState } from 'react'
import ContactPathTopImg from '../../images/contactPathTop.svg';
import ContactPathBottomImg from '../../images/WorkPathBottom.svg';
import { ContactContainer, ContactH1, ContactImg, ContactPathBottom, ContactImgContainer, Form, ImageContainer, FromContainer, PageTitle, ContactWrapper, ContactPathTop, PathContainer } from './ContactElements';



const Contact = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const updateName = e => {
        setName(e.target.value)
        console.log(name)
    }
    const updateEmail = e => {
        setEmail(e.target.value)
        console.log(email)
    }

    return (
        <ContactContainer>
            <PathContainer>
                <ContactPathTop>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </ContactPathTop>
            </PathContainer>
            <ContactWrapper>
                <FromContainer>
                    <PageTitle>
                        <ContactH1>
                            Odlotowy kontakt!
                    </ContactH1>
                    </PageTitle>
                    <Form>
                        <form className='contact'>
                            <div>
                                <input type='text' name='name' className="name" value={name} onChange={updateName} placeholder="Imię:" />
                            </div>
                            <div>
                                <input type='text' name='mail' className="email" value={email} onChange={updateEmail} placeholder="Email:" />
                            </div>
                            <div>
                                <label>
                                    <textarea type='text' name='desc' className="content"></textarea>
                                </label>
                            </div>
                        </form>
                    </Form>
                </FromContainer>
                <ContactImgContainer>
                    <ImageContainer>
                        <ContactImg />
                    </ImageContainer>
                </ContactImgContainer>
            </ContactWrapper>
            <ContactPathBottom>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </ContactPathBottom>
        </ContactContainer>
    )
}

export default Contact;
