import React from 'react'
import './flexbox.css'
import FormCadastrarProduto from './FormCadastrarProduto/FormCadastrarProduto'

export default function CadastrarProduto() {
    return (
        <section className="cadastro-usuario">
            <div className="container">
               <FormCadastrarProduto />
            </div>
        </section>
    );
}
