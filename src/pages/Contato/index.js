import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../components/Header/header.css';
import Mapa from '../../assets/img/mapa.png';

import { Link } from "react-router-dom";


export default function Contato() {
    return (
        <div>
            <Header />
            
            <section className="container">
                <div className="text-center my-5">
                    <span className="h-6 d-block">POSUI ALGUMA DÚVIDA?</span>
                    <h1 className="display-4 text-primary">Fale Conosco</h1>
                </div>
                <div className="row my-5">
                    <div className="col-lg">
                        <div className="bg-light rouded p-4 box-shadow mb-4" >
                            <form>
                                <div class="row mb-3">
                                    <label  class="col col-form-label" for="inputName">Nome</label>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" id="inputName" />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputEmail" class="col col-form-label">Email</label>
                                    <div class="col-sm-12">
                                        <input type="password" class="form-control" id="inputEmail" />
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="textarea">Mensagem</label>
                                    <textarea class="form-control" rows="4" id="textarea"></textarea>
                                   
                                </div>
                                <button className="btn btn-primary btn-lg btn-block mt-3">Enviar Mensagem</button>
                                
                            </form>
                        </div>
                    </div>
                    <div className="col-lg">
                        <h2 className="h6">NOSSO ENDERECO</h2>
                        <Link to="/"><img className="img-fluid rouded mb-4 box-shadow" src={Mapa} alt="mapa" /> </Link>
                         
                        <h2 className='h6'>DADOS DE CONTATO</h2>
                        <ul className='list-unstyled text-secondary'>
                            <li>carava@caravan.com.br</li>
                            <li>79 99999-9999</li>
                            <li>De Seg á Sex das 8h as 18h</li>
                        </ul>
                    
                        <h2 className='h6'>REDES SOCIAIS</h2>
                        <ul className='list-unstyled'>
                            <li><a className='btn btn-outline-secondary btn-block mb-2 mt-2  btn-sm' href="#">FACEBOOK</a></li>
                            <li><a className='btn btn-outline-secondary btn-block mb-2 btn-sm' href="#">YOUTUBE</a></li>
                            <li><a className='btn btn-outline-secondary btn-block btn-sm' href="#">TWITTER</a></li>
                        </ul>
                       
                    </div>
                </div>
                
            </section>
            <Footer />
            
        </div>
    )
}