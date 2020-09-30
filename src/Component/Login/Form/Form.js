import React from 'react' 
import './Form.css'
export default function Form() {
    return (
        <section className="form-home">
            <div className="container">
                <img className="login-img" src="./IMG/logo.png" alt="login" />
                <h3 className="titulo">Faça seu login.</h3>
                <div className="form-input" >
                    <button className="button">Sign up</button>
                    <button to="/CadastroUsuario"className="button">Sign in</button>
                </div>
            </div>
        </section>
    )
}
 