import React from 'react'
import './flexbox.css'
import Form from './Form/Form'
import Imagem from './Imagem/Imagem'

export default function Login(){
    return(
        <section className="login-home">
             <div className="container">
                 <Form />
                 <Imagem  url={'./IMG/imagem.png'} alt={'imagem-secundaria'} />
             </div>
        </section>
    )
} 
