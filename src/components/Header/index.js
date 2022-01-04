import { Link } from 'react-router-dom';
import Logo from '../../assets/img/caravan.svg';
import './header.css';

export default function Header() {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3 box-shadow">
                <Link to="/"><img className='navbar-bland ml-2' src={Logo} alt="caravan" /> </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse .float-ml-right" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                        <li class="nav-item dropdown">
                            <Link to="/" class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Locais
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/locais" class="dropdown-item">California</Link>
                                <Link to="/locais" class="dropdown-item">Paris</Link>
                                <Link to="/locais" class="dropdown-item">Dublin</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/planos" className='nav-link'>Planos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contato" className='nav-link'>Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className='nav-link'>Login</Link>

                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <Link to="/inscricao"><button className='btn btn-outline-primary ml-md-2'>Inscreva-se</button></Link>
                    </form>
                    
                </div>
            </nav>
        </div>
    )
}