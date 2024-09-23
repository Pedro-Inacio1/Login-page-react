import { Link } from 'react-router-dom';

import '../CSS/header.css'

const Header = () => {
    return (
        <header>
            <h1> Hello word</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Login">
                            Entrar
                        </Link>
                    </li>
                    <li>
                        <Link to="/Register">
                            Cadastre-se
                        </Link>
                    </li>
                    <li>
                        <Link to="/Home">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;