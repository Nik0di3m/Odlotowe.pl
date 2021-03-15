import styled from "styled-components";
import Five from '../../images/flame-education-1.png'


export const FooterContainer = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    margin-top: 20vh;
    background: rgb(0,174,224);
    background: linear-gradient(45deg, rgba(0,174,224,1) 35%, rgba(4,41,79,1) 100%);

`

export const FooterWrapper = styled.div`
    width: 75%;
    height: 50%;
    margin-top: 50px;
    display: grid;
     grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
     grid-template-rows: 1fr 1fr 1fr;
     gap: 0px 0px;
    grid-template-areas:
    "ColLeft ColLeft Image ColRight ColRight"
    "ColLeft ColLeft Image ColRight ColRight"
    "ColLeft ColLeft Image ColRight ColRight";
    @media screen and (max-width: 768px){
        width: 90%;
    }
}

`

export const FooterImage = styled.div`
    grid-area: Image;
    background-image: url("${Five}");
    background-size: cover;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const FooterCol = styled.div`
    min-height: 50%;
    grid-area: ColLeft;
    display: flex;
    flex-direction: column;
    color: white;
    list-style: none;

`

export const FooterColR = styled.div`
    grid-area: ColRight;
    display: flex;
    flex-direction: column;
    text-align: end;
    color: white;
`

export const List = styled.ul`
    list-style: none;
`
export const ListItem = styled.li`
    list-style: none;
`

export const FooterPath = styled.div`

    position: absolute;
    top: -10px;
    right: 0;
    width: 100vw;
    transform: rotate(180deg);

`

export const FooterCopyContainer = styled.div`

    width: 50%;
    height: auto;
    color: white;
    position: absolute;
    justify-content: flex-end;
    bottom: 0;

`

export const FooterCopy = styled.div`
    z-index: 1000;
    text-align: center;


`