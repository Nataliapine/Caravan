import Header from "../../components/Header";

import Footer from "../../components/Footer";

export default function Login() {
    return (
        <div>
        <Header />

        <div class="h-screen bg-blue-700 px-3 py-16">
            <div class="max-w-md mx-auto bg-white p-3 rounded">
                <div class="px-3 py-5">
                    <div class="text-center">
                        <h1 class="text-2xl mt-3 mb-4">LOGIN</h1>
                    </div> 
                    <div className="col-md-6 bg-light rouded p-3 box-shadow form-group my-3 mx-auto">
                        <div className="col ">
                            <label for="inputEmail4" className="form-label ">Email</label>
                            <input type="email" className="form-control" id="inputPassword4" placeholder="email" />
                        </div>
                        <div className="col">
                            <label for="inputSenha4" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="senha de acesso" />
                        </div>
                        <div class="text-right my-2">
                            <a href="#" class="cursor-pointer text-blue-500 hover:text-blue-700">Esqueceu a senha?</a> 
                        </div> 
                        <button className="btn btn-primary mb-3 mt-2">Login</button>
                    </div>
                </div>
            </div>
        </div>
            
            <Footer />
        </div>
    )
}