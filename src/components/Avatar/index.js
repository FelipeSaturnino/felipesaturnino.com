import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as S from "./styled"

const Avatar = () => {
    return (
        <S.AvatarWrapper>
        <StaticImage 
            src="../../../static/assets/img/foto-perfil.png" 
            alt="Felipe Saturnino Avatar" 
            placeholder="tracedSVG"
        />
        </S.AvatarWrapper>
    )
}

export default Avatar