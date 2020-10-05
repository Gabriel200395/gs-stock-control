import React from 'react'
import Nav from'./Nav/Nav'
import './flexbox.css'
import UsuarioCard from './UsuarioCard/UsuarioCard';

export default function CadastreSeuProduto(){
   return(
       <section className="demontracao-usuarios">
            <div className="container"> 
                 <Nav />
            </div>
            <UsuarioCard />
       </section>
   );

} 