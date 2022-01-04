import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Foto1 from '../../assets/img/local/foto-1.jpg';
import Foto2 from '../../assets/img/local/foto-2.jpg';
import Foto3 from '../../assets/img/local/foto-3.jpg';
import Foto4 from '../../assets/img/local/foto-4.jpg';
import Foto5 from '../../assets/img/local/foto-5.jpg';
import Foto6 from '../../assets/img/local/foto-6.jpg';
import Foto7 from '../../assets/img/local/foto-7.jpg';

import { Link } from "react-router-dom";

export default function Locais() {
    return (
        <div>
            <Header />
            
            <section className="container">
                <div className="text-center my-5">
                    <h2 className="h6 d-block">O MELHOR DESTINO DA SUA VIAGEM</h2>
                    <h1 className="display-4 text-primary">Descubra Dublin</h1>
                </div>
                <div className="row">
                    <div className="col-md">
                        <img className="img-fluid mb-4" src={Foto1} alt="foto-1" />
                        <img className="img-fluid mb-4" src={Foto2} alt="foto-2" />
                        <img className="img-fluid mb-4" src={Foto3} alt="foto-3" />
                    </div>
                    <div className="col-md">
                        <img className="img-fluid mb-4" src={Foto4} alt="foto-4" />
                        <img className="img-fluid mb-4" src={Foto5} alt="foto-5" />
                    </div>
                    <div className="col-md">
                        <img className="img-fluid mb-4" src={Foto6} alt="foto-6" />
                        <img className="img-fluid mb-4" src={Foto7} alt="foto-7" />
                    </div>
                </div>
                <div className="text-center my-5">
                    <span className="h-6 d-block">DESCUBRA O QUE ACONTECE NA CIDADE</span>
                    <h1 className="display-4 text-primary">Próximos Eventos</h1>
                </div>
                <table class="table table-hover my-5 table-responsive-md">
                    <thead>
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Evento</th>
                            <th scope="col">Local</th>
                            <th scope="col">Ticket</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">23/10</th>
                            <td>Julien Baker</td>
                            <td>The Academy</td>
                            <td> <Link to="#" className="btn btn-outline-secondary btn-sm">Comprar Ticket</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">25/10</th>
                            <td>Lucy Rose</td>
                            <td>Olympia</td>
                            <td> <Link to="#" className="btn btn-outline-secondary btn-sm">Comprar Ticket</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">27/10</th>
                            <td >Bon Iver</td>
                            <td >Whelans</td>
                            <td> <Link to="#" className="btn btn-outline-secondary btn-sm">Comprar Ticket</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">27/10</th>
                            <td >Bon Iver</td>
                            <td >Whelans</td>
                            <td> <Link to="#" className="btn btn-outline-secondary btn-sm">Comprar Ticket</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">27/10</th>
                            <td >Bon Iver</td>
                            <td >Whelans</td>
                            <td> <Link to="#" className="btn btn-outline-secondary btn-sm">Comprar Ticket</Link></td>
                        </tr>
                    </tbody>
                    </table>
            </section>
            <Footer />
            
        </div>
    )
}