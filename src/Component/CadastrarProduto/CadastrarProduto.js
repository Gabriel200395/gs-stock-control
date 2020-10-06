import React from 'react'
import './flexbox.css'
import FormCadastraProduto from './FormCadastraProduto/FormCadastraProduto'

export default function CadastrarProduto() {
    return (
        <section className="cadastro-usuario">
            <div className="container">
               <FormCadastraProduto />
            </div>
        </section>
    );
}
