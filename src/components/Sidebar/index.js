import * as React from "react"
import Profile from "../Profile"
import * as S from "./styled"
import SocialLinks from "../SocialLinks"

const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
        <SocialLinks />
    </S.SidebarWrapper>
)

export default Sidebar