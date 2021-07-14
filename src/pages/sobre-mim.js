import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from '../utils/getThemeColor'



import { MainContent } from "../styles/base"

const AboutPage = () => (
    <Layout>
        <Seo title="Sobre mim"  />
    <MainContent>

        <h1>Sobre mim</h1>
        <p>Olá! 👋 Boas vindas ao meu blog. </p>
        <p>Meu nome é Felipe Saturnino, moro em São Paulo/SP e sou graduado em <strong>Psicologia</strong> com ênfase em Avaliação Diagnóstica pela Universidade Nove de Julho (UNINOVE), onde fui integrante do Grupo de Iniciação Científica do Curso de Psicologia na Linha de Pesquisa <em>"Processos Cognitivos, de Aprendizagem e Interação Social"</em> do Núcleo de Investigações Clínicas e Educacionais - NICE.</p>
        <p>Decidi criar esse blog pelo meu interesse em escrever sobre assuntos variados, com foco na <em>Ciência Psicológica</em>, de forma que ela se torne mais acessível para pessoas curiosas. Espero que você possa aprender muito por aqui, assim como eu.</p>
        <p>Se quiser conhecer mais do meu histórico acadêmico e profissional, pode acessar meu <a href="http://lattes.cnpq.br/5042886265655930" target="_blank" rel="noopener noreferrer">Currículo Lattes</a> e meu perfil no <a href="https://www.linkedin.com/in/FelipeSaturnino" target="_blank" rel="noopener noreferrer" >LinkedIn</a>. Você pode entrar em contato comigo <AniLink cover direction="left" bg={getThemeColor()} to="/contato/" duration={0.6} >clicando aqui</AniLink>.</p>
    </MainContent>
    </Layout>
)

export default AboutPage