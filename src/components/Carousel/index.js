import California from '../../assets/img/california.jpg';
import Paris from '../../assets/img/paris.jpg';
import Dublin from '../../assets/img/dublin.jpg';

export default function Carousel() {
    return (
        <div>
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
        </div>
    )
}