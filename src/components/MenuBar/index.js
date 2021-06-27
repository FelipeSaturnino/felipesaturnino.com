import React, { useState, useEffect } from "react"
import { Home } from "@styled-icons/fluentui-system-filled/Home"
import { SearchOutline as Search } from "@styled-icons/evaicons-outline/SearchOutline"
import { ArrowToTop as Arrow } from "@styled-icons/boxicons-regular/ArrowToTop"
import { LightBulb as Light } from "@styled-icons/heroicons-outline/LightBulb"
import { Grid3x3Gap as Grid } from "@styled-icons/bootstrap/Grid3x3Gap"
import { ThList as List } from "@styled-icons/typicons/Thlist"


import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"

const MenuBar = () => {
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)
    
    const isLightMode = theme === "light"
    const isListMode = display === "list"

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)
        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return(
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
        <S.MenuBarLink to="/" cover direction="right" bg={getThemeColor()} duration={0.6} title="Página inicial">
                <S.MenuBarItem><Home /></S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search/" cover direction="right" bg={getThemeColor()} duration={0.6} title="Pesquisar">
                <S.MenuBarItem><Search /></S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema" onClick={() => {
                window.__setPreferredTheme(isLightMode ? 'dark' : 'light')
            }}
            className={theme}
            >
                <Light />
                </S.MenuBarItem>
            <S.MenuBarItem title="Mudar a visualização" onClick={() => {
                window.__setPreferredDisplay(isListMode ? 'grid' : 'list' )
            }}
                className="display"
            >
                {isListMode ? <Grid /> : <List />}
            </S.MenuBarItem>
            <S.MenuBarItem title="Ir para o topo"><Arrow /></S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
    )
}

export default MenuBar