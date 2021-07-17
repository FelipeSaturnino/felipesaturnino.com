import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

import { MainContent } from "../styles/base"

export default class SectionContact extends React.Component {
    state = {
        name: '',
        emailOrTel: '',
        message: ''
    };
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };
    encode = (data) => {
        return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({ 'form-name': 'contactForm', ...this.state })
        }
        
        fetch(
            "/",
            options
            )
            .then(function (response) {
                window.location.assign('/obrigado/');
            })
            .catch(function (error) {
                console.log(error);
            });
        };
        
        
        render() { return(
            <Layout>
        <Seo title="Contato"  />
    <MainContent>
        <h1>Contato</h1>
        <p>Para entrar em contato comigo, utilize o e-mail <a href="mailto:contato@felipesaturnino.com">contato@felipesaturnino.com</a>, ou envie uma mensagem abaixo.</p>
        <h3>Formulário</h3>
        <div class="container">
        <form name="contactForm" netlify-honeypot="bot-field" data-netlify="true" id="contact-form" className="contact-form" onSubmit={this.handleSubmit}>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <p className="form-row">
            <label htmlFor="contact-form-name" className="form-label">Nome: </label>
            <input type="text" name="name" id="contact-form-name" className="form-input" value={this.state.name} onChange={this.handleInputChange}/>
        </p>
        <p className="form-row">
            <label htmlFor="contant-form-email-tel" className="form-label">E-mail ou telefone:</label>
            <input type="text" name="emailOrTel" id="contant-form-email-tel" className="form-input" value={this.state.emailOrTel} onChange={this.handleInputChange}/>
        </p>
        <p className="form-row">
            <label htmlFor="contant-form-message" className="form-label">Mensagem: </label>
            <textarea name="message" id="contant-form-message" className="form-textarea" rows="7" value={this.state.message} onChange={this.handleInputChange} />
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p className="form-row form-submit">
            <button type="submit" className="button">Enviar</button>
        </p>
            </form>
        </div>
            </MainContent>
        </Layout>
        );
    }
}