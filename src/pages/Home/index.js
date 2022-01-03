import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './home.css';

import California from '../../assets/img/california.jpg';
import Paris from '../../assets/img/paris.jpg';
import Dublin from '../../assets/img/dublin.jpg';
import Passaporte from '../../assets/img/icones/passaporte.svg';
import Translado from '../../assets/img/icones/translado.svg';
import Passagens from '../../assets/img/icones/passagens.svg';
import Bagagens from '../../assets/img/icones/bagagens.svg';
import Praias from '../../assets/img/icones/praias.svg';
import Turismo from '../../assets/img/icones/turismo.svg';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Header />
            
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div className="col-lg-7 p-0">
                        <div id="carouselCidades" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <div className="carousel-caption">
                                    <h3 className="display-4">California</h3>
                                </div>
                                    <img className="d-block w-100" src={California} alt="California" />
                                </div>
                                <div className="carousel-item">
                                <div className="carousel-caption">
                                    <h3 className="display-4">Paris</h3>
                                </div>
                                <img className="d-block w-100" src={Paris} alt="Paris" />
                                </div>
                                <div className="carousel-item">
                                <div className="carousel-caption">
                                    <h3 className="display-4">Dublin</h3>
                                </div>
                                <img className="d-block w-100" src={Dublin} alt="Dublin" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Anterior</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Próximo</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 text-white p-4">
                        <h1 className="display-4">Realize a viagem dos seus sonhos</h1>
                        <p className="lead">O melhor local para viajar é com a Caravan, mais de 5000 excursoes concluídas</p>
                        <form action="">
                            <div className="input-group input-group-lg">
                                <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary p-3" type="button">Inscreva-se</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
            <section className="py-5 bg-light text-center">
                <div className="container">
                    <div className="my-5">
                        <span className="h-6 d-block">TUDO DE MELHOR PARA VOCE</span>
                        <h2 className="display-4 text-primary">Aproveite as Vantagens</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="d-flex justify-content-center mt-4">
                                <img  src={Passaporte} alt="Passaporte" />
                            </div>
                            <h3>Documentos</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit 
                                amet vulputate felis, quis malesuada turpis. Sed sem neque, vulputate sit 
                                amet vestibulum in, condimentum vitae urna
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="d-flex justify-content-center mt-4">
                                <img  src={Passagens} alt="Passagens" />
                            </div>
                            <h3>Passagens</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit 
                                amet vulputate felis, quis malesuada turpis. Sed sem neque, vulputate sit 
                                amet vestibulum in, condimentum vitae urna
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="d-flex justify-content-center mt-4">
                                <img  src={Translado} alt="Translado" />
                            </div>
                            
                            <h3>Translado</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit 
                                amet vulputate felis, quis malesuada turpis. Sed sem neque, vulputate sit 
                                amet vestibulum in, condimentum vitae urna
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="d-flex justify-content-center mt-4">
                                <img  src={Praias} alt="Praias" />
                            </div>
                            <h3>Praias</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit 
                                amet vulputate felis, quis malesuada turpis. Sed sem neque, vulputate sit 
                                amet vestibulum in, condimentum vitae urna
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="d-flex justify-content-center mt-4">
                                <img  src={Bagagens} alt="Bagagens" />
                            </div>
                            <h3>Bagagens</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit 
                                amet vulputate felis, quis malesuada turpis. Sed sem neque, vulputate sit 
                                amet vestibulum in, condimentum vitae urna
                            </p>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="d-flex justify-content-center mt-4">
                                <img  src={Turismo} alt="Turismo" />
                            </div>
                            <h3>Turismo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit 
                                amet vulputate felis, quis malesuada turpis. Sed sem neque, vulputate sit 
                                amet vestibulum in, condimentum vitae urna
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Link to="/planos" className="btn btn-primary btn-lg">Comprar Planos </Link>
                    
                    </div>
                </div>

            </section>
            <section id="home-blockquote" className="text-center text-white p-md-5 py-2">
                <blockquote className="blockquote p-md-5 p-3">
                    <p className="display-4">"A felicidade não está na estrada que leva a 
                    algum lugar. A felicidade é a própria estrada."</p>
                </blockquote>
                <figcaption className="blockquote-footer text-white">
                    Bob Dylan 
                </figcaption>
            </section>
            <section className="container">
                <div className="my-5 text-center">
                    <span className="h-5 d-block">AINDA ESTÁ COM DÚVIDAS?</span>
                    <h2 className="display-4 text-primary">Aproveite as Vantagens</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6" id="perguntasFrequentes" data-children=".pergunta">
                        <div className="pergunta py-2">
                            <a className="lead" data-toggle="collapse" data-parent="#perguntasFrequentes"
                             href="#pergunta1" aria-expanded="true" aria-controls="pergunta1">
                               É possivel cancelar uma viagem?
                            </a>
                            <div id="pergunta1" >
                                <p>
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                                    used to demonstrate the visual form of a document or a typeface without relying 
                                    on meaningful content. Lorem ipsum may be used as a placeholder before the final
                                    copy is
                                </p>
                            </div>
                        </div>
                        <div className="pergunta py-2">
                            <a className="lead" data-toggle="collapse" data-parent="#perguntasFrequentes"
                             href="#pergunta2" aria-expanded="true" aria-controls="pergunta2">
                               Qual garantia que tenho se perder o voo?
                            </a>
                            <div id="pergunta1">
                                <p>
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                                    used to demonstrate the visual form of a document or a typeface without relying 
                                    on meaningful content. Lorem ipsum may be used as a placeholder before the final
                                    copy is
                                </p>
                            </div>
                        </div>
                        <div className="pergunta py-2">
                            <a className="lead" data-toggle="collapse" data-parent="#perguntasFrequentes"
                             href="#pergunta1" aria-expanded="true" aria-controls="pergunta1">
                               Qual o melhor destino default viagem?
                            </a>
                            <div id="pergunta1">
                                <p>
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                                    used to demonstrate the visual form of a document or a typeface without relying 
                                    on meaningful content. Lorem ipsum may be used as a placeholder before the final
                                    copy is
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center my-5">
                    <p>FALE CONOSCO PARA MAIS DÚVIDAS</p>
                    <a className="btn btn-primary mt-1" href="#">Entre em Contato</a>
                </div>
                
            </section>
            <Footer />
            
        </div>
    )
}