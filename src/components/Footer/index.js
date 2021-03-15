import React from 'react'


import { FooterCol, FooterColR, FooterContainer, FooterCopy, FooterCopyContainer, FooterImage, FooterPath, FooterWrapper, List, ListItem } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterPath>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </FooterPath>
            <FooterWrapper>
                <FooterCol>
                    <h3>Przydatne Linki</h3>
                    <List>
                        <ListItem>O nas</ListItem>
                        <ListItem>Oferta</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>Kontakt</ListItem>
                    </List>
                </FooterCol>
                <FooterColR>
                    <h3>Kontakt</h3>
                    <List>
                        <ListItem>Testowa</ListItem>
                        <ListItem>11-111 Białystok </ListItem>
                        <ListItem>Tel: 123 456 789</ListItem>
                    </List>
                </FooterColR>
                <FooterImage>
                </FooterImage>
            </FooterWrapper>
            <FooterCopyContainer>
                <FooterCopy>
                    <p>Copyright © ODLOTOWE.pl 2021</p>
                </FooterCopy>
            </FooterCopyContainer>
        </FooterContainer>
    )
}

export default Footer;
