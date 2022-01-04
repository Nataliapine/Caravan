import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../components/Header/header.css';
import Mapa from '../../assets/img/mapa.png';

import { Link } from "react-router-dom";


export default function Inscreva() {
    return (
        <div>
            <Header />
            
            <section className="container">
                <div className="text-center my-5">
                    <span className="h-6 d-block">PROGRAME A VIAGEM DO SEU SONHO</span>
                    <h1 className="display-4 text-primary">INSCREVA-SE</h1>
                </div>
                <div className="row">
                    <form className="col-lg-6" action="">
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome4" placeholder="nome" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCpf4" className="form-label">CPF</label>
                            <input type="text" className="form-control" id="inputCpf4" placeholder="xxx.xxx.xxx-xx" />
                        </div>
                        
                        <div className="col-md-6">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputPassword4" placeholder="email" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputSenha4" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="senha de acesso" />
                        </div>
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Endereco</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Coloque seu Endereco" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputCity" className="form-label">Cidade</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4 col-6">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputCidade" className="form-selected">
                                <option>Selecione o Estado</option>
                                <option>Rio de Janeiro</option>
                                <option>São Paulo</option>
                                <option>Paraná</option>
                                <option>Ceará</option>
                                <option>Acre</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2 col-6">
                            <label for="inputCep" className="form-label">Cep</label>
                            <input type="text" className="form-control" id="inputCep" placeholder="xxxxx-xxx" />
                        </div>
                
                        </form>

                        <div className="bg-light rouded p-3 box-shadow form-group mb-2 mt-3 ">
                        <h2 className="h6 text-primary">FORMA DE PAGAMENTO</h2>
                        <nav className="nav btn-group" id="formaPagamento" role="tablist">
                            <button type="button" className="btn btn-secondary active btn-sm"   id="nav-cartao-tab"
                             data-toggle="tab" href="#nav-cartao" role="tab" aria-controls="nav-cartao" aria-selected="true">
                                Cartao de Crédito
                             </button>
                            <button className="btn btn-secondary" type="button" id="nav-boleto-tab"
                             data-toggle="tab" href="#nav-boleto" role="tab" aria-controls="nav-boleto" aria-selected="false">
                                Boleto Bancário
                            </button>
                            
                        </nav>
                        <div className="tab-content mt-3" id="formaPagamentoConteudo">
                            <div className="tab-pane fade show active" id="nav-cartao" role="tabpanel" aria-labelledby="nav-cartao-tab">
                                <form className="row g-3">
                                    <div className="form-group col-md-6">
                                        <label for="inputNomeCartao">Nome do Cartao</label>
                                        <input type="text" className="form-control" id="inputNomeCartao" placeHolder="Nome impresso no cartao" />
                                    </div>
                                    <div className="form-group col-md-3 col-6">
                                        <label for="inputCidade">Mes</label>
                                        <select id="inputCidade" className="form-control">
                                            <option>Expira mes...</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-3 col-6">
                                        <label for="inputCidade">Ano</label>
                                        <select id="inputCidade" className="form-control">
                                            <option>Expira ano...</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-6">
                                        <label for="inputNomeCartao">Número do Cartao</label>
                                        <input type="text" className="form-control" id="inputNomeCartao" placeHolder="5555 5555 5555 555" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label for="inputNomeCartao">Código de Seguranca</label>
                                        <input type="text" className="form-control" id="inputNomeCartao" placeHolder="xxx" />
                                    </div>
                                </form>
                            </div>
                            <div className="tab-pane fade mt-2" id="nav-boleto" role="tabpanel" aria-labelledby="nav-boleto-tab">
                                Clique em contratar plano que enviaremos o boleto por e-mail.
                            </div>
                        </div>
                    </div>
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Concordo com os <Link className="list-uninstalled" to="/">Termos e Condicoes</Link>
                        </label>
                    </div>
                    <button className="btn btn-primary mb-5 mt-2">Enviar</button>
                    </form> 
                    
                    <div className="col-lg-5 mr-2 mx-auto order-first order-lg-1">
                        <h2 className="h6 text-primary">PLANO ESCOLHIDO</h2>
                        <div className="row">
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
                                    <div className="row mt-4">
                                        <div className="col">
                                            <span className="h4">R$ 5.000</span>
                                        </div>
                                    </div>
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