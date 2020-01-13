import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Container } from "./styles";

import api from "../../services/api";

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        error: ""
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { username, email, password, password_confirmation } = this.state;
        if (!username || !email || !password) {
            this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
                await api.post("/users", { name:username, email, password, password_confirmation });
                this.props.history.push("/");
            } catch (err) {
                console.log(err);
                this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
            }
        }
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignUp}>
                    <h1>Área de Cadastro</h1>
                    <hr/>

                    {this.state.error && <p>{this.state.error}</p>}
                    
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />

                    <input
                        type="password"
                        placeholder="Confirme sua Senha"
                        onChange={e => this.setState({ password_confirmation: e.target.value })}
                    />

                    <button type="submit">Cadastrar grátis</button>
                    <hr />
                    <Link to="/">Fazer login</Link>
                </Form>
            </Container>
        );
    }
}

export default SignUp;