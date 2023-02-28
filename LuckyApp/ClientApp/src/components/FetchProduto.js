﻿import React, { Component } from "react"
import { Link } from 'react-router-dom'

export class FetchProduto extends Component {
    static displayName = "Produtos";

    constructor() {
        super();
        this.state = { produtos: [], loading: true }
    }

    componentDidMount() {
        this.populaProdutoData();
    }

    static handleEdit(id) {
        window.location.href = "/produto/edit/" + id;
    }

    static handleDelete(id) {
        if (!window.confirm("Você deseja deletar o produto : " + id)) {
            return;
        } else {
            fetch('api/produtos/' + id, { method: 'delete' }) // redireciona para rota delete api
                .then(json => {
                    window.location.href = "fetch-produto"; // redireciona para listagem de produtos
                    alert('Deletado com sucesso!');
                })

        }

    }

    static renderProdutosTabela(produtos) {

        return (
            <table className='table table-striped' aria-aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th></th>
                    </tr>
                </thead>
                <body>
                    {
                        produtos.map(prod =>
                            <tr key={prod.id}>
                                <td key={prod.descricao}></td>
                                <td>
                                    <button className="btn btn-sucess" onClick={(id) => this.handleEdit(prod.id)}>Edit</button> &nbsp;
                                    <button className="btn btn-danger" onClick={(id) => this.handleDelete(prod.id)}>Delete</button> ;
                                </td>
                            </tr>
                        )}
                </body>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em> Carregando... </em></p>
            : FetchProduto.renderProdutosTabela(this.state.produtos);

        return (
            <div>
                <h1 id="tabelLabel" >Produtos</h1>
                <p>Tela de Listagem de Produtos</p>

                <p>
                    <Link to="/add-produto"> Cadastrar Produto</Link>
                </p>

                {contents}
            </div>
        );
    }

    async populaProdutoData() {
        const response = await fetch('api/Produtos');
        const data = await response.json();
        this.setState({ produtos: data, loading: false })
    }

}






