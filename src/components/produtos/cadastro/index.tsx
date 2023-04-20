import { Layout, Input } from 'components';
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

                <Input  label='SKU: *' 
                        columnClass='is-half' 
                        onChange={setSku} 
                        value={sku} 
                        id='inputSku' 
                        placeholder='Digite o SKU do produto'
                />

                <Input  label='Preço: *' 
                        columnClass='is-half' 
                        onChange={setPreco} 
                        value={preco} 
                        id='inputPreco' 
                        placeholder='Digite o preço do produto'
                />
           
            </div>

            <div className="columns"> 
                    <Input  label='Nome: *'
                            columnClass='is-full' 
                            onChange={setNome} 
                            value={nome} 
                            id='inputNome' 
                            placeholder='Digite o nome do produto'
                    />
            </div>

            <div className="columns"> 
                    <div className="field column">
                        <label className="label" htmlFor="inputText">Descrição: *</label>
                        <div className="control">
                            <textarea  className="textarea"
                                    id="inputText" value={descricao} onChange={ event => setDescricao(event.target.value)}
                                    placeholder="Digite a descrição detalhada do produto" />
                        </div>    
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