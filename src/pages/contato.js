import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

import { MainContent } from "../styles/base"

const ContactPage = () => (
    <Layout>
        <Seo title="Contato"  />
    <MainContent>

        <h1>Contato</h1>
        <p>Para entrar em contato comigo, utilize o e-mail <a href="mailto:contato@felipesaturnino.com">contato@felipesaturnino.com</a>, ou envie uma mensagem abaixo.</p>
        <h3>Formulário</h3>
        <div class="container">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contato">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
                <label>
                    Nome:
                <input type="text" name="nome" id="name" />
                </label>
                <label>
                    E-mail ou telefone:
                    <input type="text" name="email-telefone" id="email-tel" />
                </label>
                <label>
                    Mensagem:
                    <textarea name="mensagem" id="message" rows="5" />
                </label>
                <button type="submit">Enviar</button>
            </form>
            </div>
    </MainContent>
    </Layout>
)

export default ContactPage