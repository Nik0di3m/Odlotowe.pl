import styled from "styled-components";

export const CardContainer = styled.div`
    width: 80%;
    max-height: 50%;
    padding: 25px;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar{
        display: none;
    }
    @media screen and (max-width: 768px){
        width: 100%;
    }

`

export const CardInfo = styled.div`
    width: 65%;
    height: 50%;
    border: 1px solid #e3e3e3;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 25px;
    box-shadow: 12px 12px 10px 0px rgba(50, 50, 50, 0.75); 
    @media screen and (max-width: 768px){
        height: 50%;
        width: 100%;
    }
`

export const CardTitle = styled.h1`
    color: black;
    font-size: 2vw;
    @media screen and (max-width: 768px){
        font-size: 5vw;
    }
`

export const CardDescription = styled.p`
    color: black;
    @media screen and (max-width: 768px){
        font-size: 3vw;
    }
`