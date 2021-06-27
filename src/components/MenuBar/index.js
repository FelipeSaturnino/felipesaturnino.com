import React, { useState, useEffect } from "react"
import { Home } from "@styled-icons/fluentui-system-filled/Home"
import { SearchOutline as Search } from "@styled-icons/evaicons-outline/SearchOutline"
import { ArrowToTop as Arrow } from "@styled-icons/boxicons-regular/ArrowToTop"
import { LightBulb as Light } from "@styled-icons/heroicons-outline/LightBulb"
import { Grid3x3Gap as Grid } from "@styled-icons/bootstrap/Grid3x3Gap"
import { ThList as List } from "@styled-icons/typicons/Thlist"
import { Menu } from "@styled-icons/boxicons-regular/Menu"

import getThemeColor from "../../utils/getThemeColor"
import * as S from "./styled"
import * as GA from "./trackers"

const MenuBar = ({ setIsMenuOpen, isMenuOpen }) => {
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)
    
    const isLightMode = theme === "light"
    const isListMode = display === "list"

    if (theme !== null) {
        GA.themeTracker(theme)
    }

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)
        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    const openMenu = () => {
        GA.menuTracker()
        setIsMenuOpen(!isMenuOpen)
    }

    return(
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
        <S.MenuBarLink
            to="/"
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
            title="Página inicial"
            >
            <S.MenuBarItem>
                <Home />
            </S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink 
                to="/search/"
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
                title="Pesquisar"
            >
                <S.MenuBarItem onClick={() => GA.searchClickTrack()}>
                    <Search />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroupMobile>
        <S.MenuBarGroup>
          <S.MenuBarItem title="Abrir Menu" onClick={openMenu}>
            <Menu />
          </S.MenuBarItem>
        </S.MenuBarGroup>
      </S.MenuBarGroupMobile>

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
            <S.MenuBarItem 
                title="Ir para o topo"
                onClick={() => {
                    GA.topClickTrack()
                    window.scroll({ top: 0, behavior: "smooth" })
                }}
            >
                <Arrow />
            </S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
    )
}

export default MenuBar