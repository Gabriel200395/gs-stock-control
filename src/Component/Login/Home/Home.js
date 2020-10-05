import React from 'react' 
import './Home.css'
import{ Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="form-home">
            <div className="container">
                <h3 className="titulo">Faça seu login.</h3>
                <div className="form-input" >
                    <Link to="/CadastroUsuario" className="button">Sign in</Link>
                    <Link to="/ListaUsuarios" className="button">Sign up</Link>
                </div>
            </div>
        </section>
    )
}
 