import './index.css'

import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/quemsomos">Quem Somos</Link></li>
                <li><Link to="/fornecedores">Fornecedores</Link></li>
                <li><Link to="/contato">Contatos</Link></li>
            </ul>
        </nav>
    )
}
export default Menu;