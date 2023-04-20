import { Layout } from "components/layout";
import { useState } from "react";

export const CadastroProdutos: React.FC = () => {

    const [sku, setSku] = useState('');
    const [preco, setPreco] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const submit = () => {
        const produto = {
            sku,
            preco,
            nome,
            descricao
        }
        console.log(produto);
    }


    return (
        <Layout titulo="Produtos">

            <div className="columns">

                <div className="field column is-half">
                    <label className="label" htmlFor="inputSku">SKU: *</label>
                    <div className="control">
                        <input  className="input"
                                id="inputSku" value={sku} onChange={ event => setSku(event.target.value)}
                                placeholder="Digite o SKU do produto" />
                    </div>    
                </div>

                <div className="field column is-half">
                    <label className="label" htmlFor="inputPreço">Preço: *</label>
                    <div className="control">
                        <input  className="input"
                                id="inputPreço" value={preco} onChange={ event => setPreco(event.target.value)}
                                placeholder="Digite o preço do produto" />
                    </div>    
                </div>

            </div>

                <div className="field">
                    <label className="label" htmlFor="inputNome">Nome: *</label>
                    <div className="control">
                        <input  className="input"
                                id="inputNome" value={nome} onChange={ event => setNome(event.target.value)}
                                placeholder="Digite o nome do produto" />
                    </div>    
                </div>

                <div className="field">
                    <label className="label" htmlFor="inputText">Descrição: *</label>
                    <div className="control">
                        <textarea  className="textarea"
                                id="inputText" value={descricao} onChange={ event => setDescricao(event.target.value)}
                                placeholder="Digite a descrição detalhada do produto" />
                    </div>    
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button onClick={submit} className="button is-light">Salvar</button>
                    </div>
                    <div className="control">
                        <button className="button is-black">Voltar</button>
                    </div>
                </div>

        </Layout>  
    )
}