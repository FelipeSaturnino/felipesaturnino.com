import * as React from "react"
import { Home } from "@styled-icons/fluentui-system-filled/Home"
import { SearchOutline as Search } from "@styled-icons/evaicons-outline/SearchOutline"
import { ArrowToTop as Arrow } from "@styled-icons/boxicons-regular/ArrowToTop"
import { LightBulb as Light } from "@styled-icons/heroicons-outline/LightBulb"
import { Grid3x3Gap as Grid } from "@styled-icons/bootstrap/Grid3x3Gap"


import * as S from "./styled"

const MenuBar = () => (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
        <S.MenuBarLink to="/" title="Página inicial">
                <S.MenuBarItem><Home /></S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search/" title="Pesquisar">
                <S.MenuBarItem><Search /></S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema"><Light /></S.MenuBarItem>
            <S.MenuBarItem title="Mudar a visualização"><Grid /></S.MenuBarItem>
            <S.MenuBarItem title="Ir para o topo"><Arrow /></S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
)

export default MenuBar