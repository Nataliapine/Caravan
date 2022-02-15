import './footer.css'; 

export default function Footer() {
    return(
        <footer>
            <div className='bg-dark text-white'>
                <div className='container'>
                    <div className='row py-4'>
                        <div className='col-md-3 col-6'>
                            <h4>PÁGINAS</h4>
                            <ul className='list-unstyled'>
                                <li>Planos</li>
                                <li>Contato</li>
                                <li>Inscreva-se</li>
                            </ul>
                        </div>
                        <div className='col-md-3 col-6'>
                            <h4>LOCAIS</h4>
                            <ul className='list-unstyled'>
                                <li>California</li>
                                <li>Paris</li>
                                <li>Dublin</li>
                            </ul>
                        </div>
                        <div className='col-md-4 col-6'>
                            <h4>DADOS DE CONTATO</h4>
                            <ul className='list-unstyled text-secondary'>
                                <li>carava@caravan.com.br</li>
                                <li>79 99999-9999</li>
                                <li>De Seg á Sex das 8h as 18h</li>
                            </ul>
                        </div>
                        <div className='col-md-2 col-6'>
                            <h4 className='h6'>REDES SOCIAIS</h4>
                            <ul className='list-unstyled'>
                                <li><a className='btn btn-outline-secondary btn-block mb-2 mt-2  btn-sm' href="#">FACEBOOK</a></li>
                                <li><a className='btn btn-outline-secondary btn-block mb-2 btn-sm' href="#">YOUTUBE</a></li>
                                <li><a className='btn btn-outline-secondary btn-block btn-sm' href="#">TWITTER</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-primary text-center py-3'>
                <p className='mb-0 text-white'>Caravan © 2020. Alguns direitos reservados.</p>
                <p className='mb-0 text-white'>Code by Natália Santos © 2021.<span>❤</span></p>
            </div>
            
        </footer>
        
    )
}