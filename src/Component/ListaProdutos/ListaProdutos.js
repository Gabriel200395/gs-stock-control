import React from 'react'
import Nav from'../ListaUsuarios/Nav/Nav'
import './flexbox.css'
import ProdutosCard from './ProdutosCard/ProdutosCard';

export default function ListaProdutos(){
   return(
       <section className="demontracao-produtos">
            <div className="container"> 
                 <Nav />
            </div>
            <ProdutosCard />
       </section>
   );

} 