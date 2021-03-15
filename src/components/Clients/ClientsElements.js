import styled from 'styled-components';


export const ClientContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 50px;

`

export const LogoOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: blue;
    z-index: 50;
    top: 0;
    left: 0;
    mix-blend-mode: screen;
`

export const ClientsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`

export const ClientH1 = styled.h1`
    color: black;
    font-size: 2vw;
    @media screen and (max-width: 768px){
        font-size: 4vw;
    }
`

export const ClientsLogoContainer = styled.div`
    width: 80vw;
    margin: 0 auto;

`

export const ClientsLogo = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 0.3fr 0.3fr;
    grid-template-rows: 0.3fr 0.3fr 0.3fr;
    gap: 0px 0em;
    grid-template-areas:
    "skibiccy kaja emtech"
    "logo logo logis"
    "logo logo tas";
    align-items: center;
`

export const Logo1 = styled.div`
    grid-area: logo;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const Logo2 = styled.div`
    grid-area: skibiccy;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

`
export const Logo3 = styled.div`
    grid-area: kaja;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const Logo4 = styled.div`
    grid-area: emtech;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const Logo5 = styled.div`
    grid-area: logis;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const Logo6 = styled.div`
    grid-area: tas;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Logo = styled.div`

`
