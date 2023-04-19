export const Menu: React.FC = () => {
    return (
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list is-flex-direction-column">
                <li >
                    <a href="#" className="m-0 pl-0">
                        <span className="icon"></span> Home
                    </a>
                </li>
                <li>                    
                    <a href="#" className="m-0 pl-0">
                        <span className="icon"></span> Cadastro
                    </a>
                </li>
                <li>           
                    <a href="#" className="m-0 pl-0">
                        <span className="icon"></span> Configurações
                    </a>
                </li>
            </ul>
        </aside>
    )
}

const MenuItem: React.FC = () => {
    return (
        
    )
}
