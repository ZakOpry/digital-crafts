import React from 'react'
import { SideBarLink } from '../Styled-components/SidebarStyle'

export default function SidebarLinks(props) {
    return (
        <>
            <SideBarLink to={props.linkData.path}>{props.linkData.name}</SideBarLink>
        </>
    )
}
