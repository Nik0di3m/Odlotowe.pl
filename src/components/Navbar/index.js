import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { FaBars } from 'react-icons/fa';


const Navbar = (props) => {
    return (
        <div className="navbar">
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        ODLOTOWE.PL
                    </NavLogo>
                    <MobileIcon>
                        <FaBars onClick={props.toggle} />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/about'>Home</NavLinks>
                            <NavLinks to='/about'>Blog</NavLinks>
                            <NavLinks to='/about'>Kontakt</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;
