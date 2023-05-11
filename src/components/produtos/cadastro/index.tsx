import { Layout, Input } from 'components';
import { useState } from "react";
import { useProdutoService } from 'app/service';
import { Produto } from 'app/models/produtos';

export const CadastroProdutos: React.FC = () => {

    const service = useProdutoService();
    const [sku, setSku] = useState<string>('');
    const [preco, setPreco] = useState<string>('');
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');  
    const [id, setId] = useState<string>('');
    const [dataCadastro, setdataCadastro ] = useState<string>('')

    const submit = () => {

        const produto: Produto = {
            id,
            sku,
            preco: parseFloat(preco),
            nome,
            descricao
        }

        if(id) {
            service
                .atualizar(produto)
                .then(response => console.log("Deu certo!"))
        } else {
            service
                .salvar(produto)
                .then(produtoResposta => {
                setId(produtoResposta.id ?? '')
                setdataCadastro(produtoResposta.dataCadastro ?? '')
                })
                .catch(error => {
                    console.error(error);
                });
        }     
    }

    return (
        <Layout titulo="Produtos">

        {id && 

            <div className="columns">

                <Input label="Código:" 
                    columnClass="is-half" 
                    value={id}
                    id="inputId"
                    disabled={true}
                    />

                <Input label="Data Cadastro:" 
                    columnClass="is-half" 
                    value={dataCadastro}
                    id="inputDataCadastro"
                    disabled={true}
                    />
            </div>

        }
            
            
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
                        <button onClick={submit} className="button is-light">
                            {id ? "Atualizar" : "Salvar"}
                        </button>
                    </div>
                    <div className="control">
                        <button className="button is-black">Voltar</button>
                    </div>
                </div>

        </Layout>  
    )
}