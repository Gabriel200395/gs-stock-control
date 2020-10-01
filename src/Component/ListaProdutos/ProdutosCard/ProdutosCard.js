import React from 'react'
import './ProdutosCard.css'
import usePro from './usePro'

export default function ProdutosCard() {    
   
    const [usuarios] = usePro('');
    
    return (
        <section className="card">
            <div className="container">
                {usuarios.map((usuario) => (
                    <div className="card-container" key={usuario._id}>
                        <div className="container-titulo">
                            <h3 className="titulo">{usuario.empresa}</h3>
                        </div>
                        <ul className="lista">
                            <li>nome da empresa : {usuario.empresa}</li>
                            <li>Gmail :{usuario.gmail}</li>
                            <li>telefone: {usuario.telefone}</li>
                            <li>cidade: {usuario.cidade}</li>
                            <li>Uf: {usuario.uf}</li>
                        </ul>
                        <div className="container-button-produto">
                            <button>remove</button>
                            <button>edit</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>
    );
}