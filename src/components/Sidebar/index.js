import React, { useState } from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements';

const Sidebar = (props) => {
    return (
        <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu >
                    <SidebarLink to="about">Home</SidebarLink>
                    <SidebarLink to="about">Blog</SidebarLink>
                    <SidebarLink to="about">Kontakt</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer >
    )
}

export default Sidebar;
