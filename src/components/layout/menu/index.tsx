import Link from "next/link";

export const Menu: React.FC = () => {
    return (
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list is-flex-direction-column">
                <MenuItem href="/" label="Página Inicial" />
                <MenuItem href="/" label="Cadastro" />
                <MenuItem href="/" label="Configurações" />
                <MenuItem href="/" label="Sair" />
            </ul>
        </aside>
    )
}

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {

    return (
        <li >
            <Link className="m-0 pl-0" href={props.href}>    
                    <span className="icon"></span> {props.label} 
            </Link>
        </li>
    )
}
