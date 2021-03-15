import styled from "styled-components";

export const AboutContiner = styled.div`
    display: flex;
    width: 95vw;
    flex-direction: column;
    margin: 0 auto;


`

export const AboutTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    

`

export const AboutH1 = styled.h1`
    color: black;
    @media screen and (max-width: 768px){
        font-size: 8vw;
    }
`

export const AboutInfoContainer = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 100vh;
    }
`

export const AboutImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    @media screen and (max-width: 768px){
        width: 100%;
        padding: 20px;
    }

`