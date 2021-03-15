import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgb(0,174,224);
    background: linear-gradient(45deg, rgba(0,174,224,1) 35%, rgba(4,41,79,1) 100%);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
    font-size: 1.5rem;
`


export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(3, 60px);
        align-items: center;
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    font-size: 2rem;
    list-style: none;
    width: 90%;
    padding: 20px 20px;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.5s ease-in-out;

    &:hover{
        border: 1px solid white;
        
    }
`
