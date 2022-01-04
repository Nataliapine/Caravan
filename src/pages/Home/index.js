import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

import './home.css';


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
            <Carousel />
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
                    <span className="h6 d-block">AINDA ESTÁ COM DÚVIDAS?</span>
                    <h2 className="display-4 text-primary">Perguntas Frequentes</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6" id="perguntasFrequentes" data-children=".pergunta">
                    <div className="pergunta py-2">
                        <a className="lead" data-toggle="collapse" data-parent="#perguntasFrequentes" href="#pergunta1" aria-expanded="true" aria-controls="pergunta1">→ É possível cancelar a viagem?</a>
                        <div id="pergunta1" className="collapse show" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.</p>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="pergunta py-2">
                        <a className="lead" data-toggle="collapse" data-parent="#perguntasFrequentes" href="#pergunta2" aria-expanded="true" aria-controls="pergunta2">→ Qual a garantia que tenho se perder o voo?</a>
                        <div id="pergunta2" className="collapse" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.</p>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="pergunta py-2">
                        <a className="lead" data-toggle="collapse" data-parent="#perguntasFrequentes" href="#pergunta3" aria-expanded="true" aria-controls="pergunta3">→ Qual a principal forma de viagem?</a>
                        <div id="pergunta3" className="collapse" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.</p>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="pergunta py-2">
                        <a className="lead" data-toggle="collapse" data-parent="#perguntasFrequentes" href="#pergunta4" aria-expanded="true" aria-controls="pergunta4">→ Qual o melhor destino de viagem?</a>
                        <div id="pergunta4" className="collapse" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.</p>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="pergunta py-2 mb-4">
                        <a className="lead" data-toggle="collapse" data-parent="#perguntasFrequentes" href="#pergunta5" aria-expanded="true" aria-controls="pergunta5">→ Vocês dão descontos para grupos grandes?</a>
                        <div id="pergunta5" className="collapse" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium lorem non vestibulum scelerisque. Proin a vestibulum sem, eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
    
            <Footer />
            
        </div>
    )
}