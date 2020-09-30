import React from 'react'
import './flexbox.css'
import Home from './Home/Home'
import Imagem from './Imagem/Imagem'

export default function Login(){
    return(
        <section className="login-home">
             <div className="container">
                 <Home />
                 <Imagem  url={'./IMG/imagem.png'} alt={'imagem-secundaria'} />
             </div>
        </section>
    )
} 
