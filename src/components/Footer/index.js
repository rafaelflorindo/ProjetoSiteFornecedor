import './index.css'
import { Link } from 'react-router-dom';
import logoFooter from './logoFooter.png';
function Footer() {
    return (
        <footer className='rodape'>
            <div className='rodapeConteudo'>
                <div className='rodapeColuna'>
                    <img src={logoFooter} alt="logoFooter" />
                    <p>
                        Plataforma moderna para conexão entre fornecedores e compradores.
                    </p>
                </div>
                <div className='rodapeColuna'>
                    <h3>Fornecedores</h3>
                    <ul>
                        <li><Link to = "/">Cadastro</Link></li>
                        <li><Link to = "/">Planos</Link></li>
                        <li><Link to = "/">Suporte</Link></li>
                        <li><Link to = "/">Ferramentas</Link></li>
                    </ul>
                </div>
                <div className='rodapeColuna'>
                    <h3>Compradores</h3>
                    <ul>
                        <li><Link to = "/">Buscar Empresas</Link></li>
                        <li><Link to = "/">Solicitações</Link></li>
                        <li><Link to = "/">Contato</Link></li>
                    </ul>
                </div>
                <div className='rodapeColuna'>
                    <h3>Atendimento</h3>
                    <ul>
                        <li>(44) 99999-9999</li>
                        <li>contato@forntech.com</li>
                        <li>Maringá - PR</li>
                    </ul>
                </div>
            </div>

            <div className='credenciais'>
                <p>© 2026 TechFlorindo - Todos os direitos reservados</p>

                <div className='linksRodape'>
                    <Link to = "/">Termos de Uso</Link>
                    <Link to = "/">Política de Privacidade</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;