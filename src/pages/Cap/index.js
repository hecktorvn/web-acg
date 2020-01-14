import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { format, parseISO } from "date-fns";

import api from "../../services/api";
import { logout } from "../../services/auth";

import { Container } from "./styles";

function formatMoney(val){
    return new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(val);
}

class Cap extends Component {
    state = {
        list: [],
        error: "Nenhum cap encontrado!"
    };

    componentDidMount() {
        this.prepareCaps();
    }

    handleRefresh(){
        this.setState({list: [], error: "Atualizando..."});
        this.prepareCaps();
    }

    async prepareCaps(){
        try{
            const {data:caps, status} = await api.get('/caps');

            if( status !== 200 ){
                this.setState({list: [], error: "Nenhum cap encontrado!"});
            } else {
                this.setState({list: caps, error: ""});
            }
        } catch(error) {
            this.setState({error: "Erro ao tentar capturar o cap!"});
        }
    }

    render() {
        let totais = {total:0, devedor:0};
        return (
            <Container>
                <div id="table_caps">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Vencimeno</th>
                                <th>Valor</th>
                                <th>Valor Pago</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.error ? (<tr key="error"><td colSpan="4" align="center">{this.state.error}</td></tr>) : null}
                            {this.state.list.map((item, idx) => {
                                totais.total += item.amount;
                                totais.devedor += item.amount - item.amount_paid;

                                return (
                                    <tr key={ item.id }>
                                        <td>{ item.name }</td>
                                        <td align="center">{ format(parseISO(item.date), 'dd/MM/yyyy') }</td>
                                        <td align="right">{ formatMoney(item.amount) }</td>
                                        <td align="right">{ formatMoney(item.amount_paid) }</td>
                                    </tr>
                                );
                            })}
                        </tbody>

                        <tfoot>
                            <tr key="total">
                                <td><strong>TOTAL.:</strong></td>
                                <td></td>
                                <td align="right"><b>{ formatMoney(totais.total) }</b></td>
                                <td align="right"><b>{ formatMoney(totais.devedor) }</b></td>
                            </tr>
                        </tfoot>
                    </table>

                    <div id="buttons">
                        <button onClick={() => {this.handleRefresh();} }>Atualizar</button>
                        <button className="bg-danger" onClick={logout}>Sair</button>
                    </div>
                </div>
            </Container>
        );
    }
}

export default withRouter(Cap);