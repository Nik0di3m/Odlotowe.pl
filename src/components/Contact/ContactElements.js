import styled from "styled-components";
import ContactFlame from '../../images/flameContact.svg';

export const ContactContainer = styled.div`
    display: flex;
    position: relative;
    background: rgb(0,174,224);
    background: linear-gradient(45deg, rgba(0,174,224,1) 35%, rgba(4,41,79,1) 100%);
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 120vh;
    @media screen and (max-width: 768px){
        flex-direction: column;
        min-height: 100vh;
    
    }
`
export const PathContainer = styled.div`
    position: absolute;
    width: 100vw;
    transform: rotate(180deg);
    top: -15px;
    left: 0;
    z-index: 60;
    @media screen and (max-width: 768px){
    left: 0;
    }
`

export const ContactPathTop = styled.div`
    width: 100%;
    height: 50%;
`

export const ContactWrapper = styled.div`
    display: flex;
    height: 90%;
    justify-content: center;
    align-items: center;
    width: 95%;
    @media screen and (max-width: 768px){
        flex-direction: column;
        margin-top: 50px;
    
    }

`
export const FromContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    z-index: 20;
    @media screen and (max-width: 768px){
        width: 95%;
        height: auto;
    
    }

`
export const PageTitle = styled.div`


`
export const ContactH1 = styled.h1`
    color: white;
    @media screen and (max-width: 768px){
        font-size: 5vw;
    }
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 100%;
    justify-content: space-between;
    
`
export const ContactImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 40%; 
    height: 100%;
    @media screen and (max-width: 768px){
        width: 95%;
        height: 40%;
    
    }
`
export const ContactImg = styled.div`
    background: url(${ContactFlame});
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: 100% 100%;

`
export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 75%;
        height: 75%;
    }
`
export const ContactPathBottom = styled.div`

    width: 100%;
    position: absolute;
    bottom: -10px;
    right: 0;
    z-index: 200;
`
