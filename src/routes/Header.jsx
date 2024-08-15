import { Link } from 'react-router-dom';

import '../Header.css'

const Header = () => {
    return (
        <header>
            <img src='https://imgs.search.brave.com/6G7zt1sAiBDd6K-4-6DSN9usZYxcjuacCiLB6-f-Gac/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kaWNp/b25hcmlvLnByaWJl/cmFtLm9yZy9pbWcv/ZGljaW9uYXJpb19z/aW5nbGUud2VicA' width={80} height={80} />
            <h1> Hello word</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/About-Us">
                            Sobre nós
                        </Link>
                    </li>
                    <li>
                        <Link to="/Login">
                            Entrar ou se cadastrar
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;