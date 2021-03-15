import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
export const Nav = styled.nav`
    background: rgba(0,174,224,.5);
    height: 50px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    position: --webkit-sticky;
    font-size: 1rem;
    width: 100vw;
    margin: 0 auto;
    z-index: 900;
    /* background: rgb(0,174,224);
    background: linear-gradient(45deg, rgba(0,174,224,1) 35%, rgba(4,41,79,1) 100%); */

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    margin: 0 auto;
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-items: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        cursor: pointer;
        color: white;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;


    @media screen and ( max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 50px;
    display: flex;
`

export const NavLinks = styled(LinkS)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 1px solid #fff;
    }
    &:hover{
        border-bottom: 1px solid #fff;
    }
`