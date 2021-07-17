import * as React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { MainContent } from "../styles/base"
import getThemeColor from '../utils/getThemeColor'


const ThanksPage = () => (
  <Layout>
    <Seo title="Muito obrigado!" />
    <MainContent>
    <h1>Muito obrigado!</h1>
    <p>Sua mensagem foi enviada com sucesso.</p>
    <AniLink cover direction="left" bg={getThemeColor()} to="/contato/" duration={0.6} ><button className="button">Voltar</button></AniLink>
    </MainContent>
  </Layout>
)

export default ThanksPage