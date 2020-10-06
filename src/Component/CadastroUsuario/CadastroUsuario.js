import React from 'react'
import './flexbox.css'
import FormCadastro from './FormCadastro/FormCadastro'

export default function CadastroUsuario() {
    return (
        <section className="cadastro-usuario">
            <div className="container">
               <FormCadastro />
            </div>
        </section>
    );
}
