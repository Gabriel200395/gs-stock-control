import React from 'react'
import Nav from'./Nav/Nav'
import './flexbox.css'
import EmpresaCard from './EmpresaCard/EmpresaCard';

export default function ListaEmpresa(){
   return(
       <section className="demontracao-usuarios">
            <div className="container"> 
                 <Nav />
            </div>
            <EmpresaCard />
       </section>
   );

} 