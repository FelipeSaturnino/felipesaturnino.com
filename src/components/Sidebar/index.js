import * as React from "react"
import propTypes from 'prop-types'
import Profile from "../Profile"
import * as S from "./styled"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

const Sidebar = ({
    site: { title, position, authorDescription },
    isMenuOpen,
    setIsMenuOpen
}) => (
    <S.SidebarWrapper isMenuOpen={isMenuOpen}>
        <Profile 
            title={title}
            position={position}
            authorDescription={authorDescription}
            isMobileHeader={false}
        />
        <S.SidebarLinksContainer>
            <SocialLinks />
            <MenuLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </S.SidebarLinksContainer>
    </S.SidebarWrapper>
)

Sidebar.propTypes = {
    site: propTypes.shape({
      title: propTypes.string.isRequired,
      position: propTypes.string.isRequired,
      authorDescription: propTypes.string.isRequired
    })
  }

export default Sidebar