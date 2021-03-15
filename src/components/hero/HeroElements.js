import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: rgb(0,174,224);
    background: linear-gradient(45deg, rgba(0,174,224,1) 35%, rgba(4,41,79,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    min-height: 100vh;
    position: relative;
    width: 100vw;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    right: 0;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgb(0,174,224);
    background: linear-gradient(45deg, rgba(0,174,224,1) 35%, rgba(4,41,79,1) 100%);

    @media screen and (max-width: 768px){
        flex-direction: column;
    
    }
`
export const HeroItems = styled.div`
    display: flex;
    width: 80vw;
    height: auto;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: space-between;
        width: 95vw;
    }
`


export const HeroImg = styled.div`
    z-index: 5;
    width: 50vw;

    

    @media screen and (max-width: 768px){
        position: absolute;
        bottom: 5%;
        width: 90vw;

        
    }
`

export const HeroText = styled.div`
    display: flex;
    padding: 10px;
    z-index: 10;
    color: white;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    word-wrap: break-word;
    @media screen and (max-width: 768px){
        margin-top: 50px;
        position: absolute;
        top: 0;
    }

`

export const HeroPath = styled.div`
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100vw;
`
export const HeroBlur = styled.div`
    position: absolute;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    top: 0;

`
export const Button = styled(Link)`
    padding: 8px 20px;
    border: 1px solid white;
    border-radius: 20px;
    z-index: 50;
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
    transition: 0.3s ease-in-out;
    font-weight: 600;

    &:hover{
        background-color:white;
        color: rgba(0,174,224,1);
        
    }
`

export const HeroH1 = styled.h1`
    margin-top: 20px;
    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
`

export const HeroH2 = styled.h2`

    font-weight: 400;

    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
`

export const HeroH3 = styled.h3`

    font-weight: 300;

    @media screen and (max-width: 768px){
        font-size: 1.2rem;
        font-weight: 300;
    }

`