import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import './planos.css';
import '../../components/Header/header.css';


import { Link } from "react-router-dom";

export default function Planos() {
    return (
        <div>
            <Header />
            
            <section className="container">
                <div className="text-center my-5">
                    <span className="h-6 d-block">SEU PLANO, SUA VIAGEM</span>
                    <h1 className="display-4 text-primary">Escolha o Plano</h1>
                </div>
                <div className="row my-5">
                    <div className="col-md mb-5">
                        <div className="bg-light rouded p-4 box-shadow" >
                            <h2>Gold</h2>
                            <ul className="lista-plano list-unstyled">
                                <li> → 30 dias de Viagem</li>
                                <li> → 3 destinos diferentes</li>
                                <li> → Tudo pago pela empresa</li>
                                <li> → Ingresso para festas</li>
                            </ul>
                            <form>
                                <div className="form-group">
                                    <select class="form-control bg-ligth" id="inputCidades" aria-label="Default select example">
                                        <option selected>Selecione a Cidade</option>
                                        <option value="1">California</option>
                                        <option value="2">Paris</option>
                                        <option value="3">Dublin</option>
                                    </select>
                                </div>
                            </form>
                            <div className="row mt-4 align-items-center">
                                <div className="col">
                                    <Link to="/" className="btn btn-primary btn-lg btn-block">Comprar Plano</Link>
                                </div>
                                <div className="col">
                                    <span className="h4">5.000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="bg-light rouded p-4 box-shadow">
                            <h2>Platinum <span class="badge bg-success ml-2">Novo</span></h2>
                            <ul className="lista-plano list-unstyled">
                                <li> → 60 dias de Viagem</li>
                                <li> → 7 destinos diferentes</li>
                                <li> → Tudo pago pela empresa</li>
                                <li> → Ingresso para festas</li>
                            </ul>
                            <form>
                                <div className="form-group">
                                    <select class="form-control bg-ligth" id="inputCidades" aria-label="Default select example">
                                        <option selected>Selecione a Cidade</option>
                                        <option value="1">California</option>
                                        <option value="2">Paris</option>
                                        <option value="3">Dublin</option>
                                    </select>
                                </div>
                            </form>
                            <div className="row mt-4 align-items-center">
                                <div className="col">
                                    <Link to="/" className="btn btn-primary btn-lg btn-block">Comprar Plano</Link>
                                </div>
                                <div className="col">
                                    <span className="h4">7.500</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </section>
            <Footer />
            
        </div>
    )
}