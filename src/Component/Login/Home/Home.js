import React from 'react' 
import './Home.css'
import{ Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="form-home">
            <div className="container">
                <h3 className="titulo">Faça seu login.</h3>
                <div className="form-input" >
                    <Link to="/CadastroEmpresa" className="button">Sign up</Link>
                    <Link to="/ListaEmpresa" className="button">Register</Link>
                </div>
            </div>
        </section>
    )
}
 