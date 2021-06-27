import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

import { MainContent } from "../styles/base"

const AboutPage = () => (
    <Layout>
        <Seo title="Sobre mim"  />
    <MainContent>

        <h1>Sobre mim</h1>
        <p>Olá! 👋 Boas vindas ao meu blog. </p>

        <p>Entre em contato comigo por <a href="mailto:contato@felipesaturnino.com">contato@felipesaturnino.com</a>.</p>
    </MainContent>
    </Layout>
)

export default AboutPage