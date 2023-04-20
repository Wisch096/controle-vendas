import { Layout } from "components/layout";

export const CadastroProdutos: React.FC = () => {
    return (
        <Layout titulo="Produtos">

            <div className="field">
                <label className="label" htmlFor="inputSku">SKU: *</label>
                <div className="control">
                    <input  className="input"
                            id="inputSku"
                            placeholder="Digite o SKU do produto" />
                </div>    
            </div>

            <div className="field">
                <label className="label" htmlFor="inputNome">Nome: *</label>
                <div className="control">
                    <input  className="input"
                            id="inputNome"
                            placeholder="Digite o nome do produto" />
                </div>    
            </div>

            <div className="field">
                <label className="label" htmlFor="inputPreço">Preço: *</label>
                <div className="control">
                    <input  className="input"
                            id="inputPreço"
                            placeholder="Digite o preço do produto" />
                </div>    
            </div>

            <div className="field">
                <label className="label" htmlFor="inputText">Descrição: *</label>
                <div className="control">
                    <textarea  className="textarea"
                            id="inputText"
                            placeholder="Digite a descrição detalhada do produto" />
                </div>    
            </div>

        </Layout>  
    )
}