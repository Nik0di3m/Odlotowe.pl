import styled from 'styled-components';


export const WorkContainer = styled.div`
    width: 100vw;
    display: flex;
    min-height: 120vh;
    justify-content: center;
    align-items: center;
    z-index: 20;
    position: relative;
    background: rgb(0,174,224);
    background: linear-gradient(45deg, rgba(0,174,224,1) 35%, rgba(4,41,79,1) 100%);
    @media screen and (max-width: 768px){
        max-width: 100vw;
    }
   
`
export const WorkPathBg = styled.div`
    z-index: 10;
    position: absolute;
    max-width: 100vw;
    opacity: 0.2;
    left: 0;
`


export const WorkPathTop = styled.div`
    position: absolute;
    top: -20px;
    width: 100vw;
    transform: rotate(180deg)


`


export const WorkInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 50;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }


`

export const WorkInfo = styled.div`
    width: 45%;
    height: 100%;
    z-index: 100;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const WorkImg = styled.div`
    width: 30%;
    height: 50%;
    @media screen and (max-width: 768px){
        width: 90%;
    }
`

export const WorkPathBottom = styled.div`
    position: absolute;
    bottom: -60px;
    left: 0;
    width: 100vw;
    z-index: 10;
    @media screen and (max-width: 768px){
        bottom: -20px;
    }

`

export const WorkTitle = styled.div`
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const WorkTitleH1 = styled.h1`
    color: white;
    font-size: 2vw;
    @media screen and (max-width: 768px){
        font-size: 4vw;
    }
`

export const WorkInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
`