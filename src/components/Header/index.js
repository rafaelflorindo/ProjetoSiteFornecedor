import Menu from "./Menu/index";
import './index.css';
import logo from './logo.png';

function Header() {
    return (
        <header className='headerTopo'>
            <div className="headerLogo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="headerMenu">
                <Menu />
            </div>
            <div className="headerButtons">
                <button>Cadastrar</button>
                <button>Login</button>
            </div>
        </header>
    )
}

export default Header;