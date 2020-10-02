import React from 'react'
import { Link } from 'react-router-dom';
import './ProdutosCard.css'
import usePro from './usePro'

export default function ProdutosCard() {    
   
    const [produto,deleteProdutos] = usePro('');
    
    return (
        <section className="card">
            <div className="container">
                {produto.map((prod) => (
                    <div className="card-container-produto" key={prod._id}>
                        <div className="container-titulo">
                            <h3 className="titulo">{prod.produto}</h3>
                        </div>
                        <img className="produto-imagem"
                             src={prod.imagem} 
                             alt="imagem" 
                             width="220" height="120"
                            />
                        <ul className="lista">
                           <li>descricao Produto: {prod.descricao}</li>
                            <li>preco : {prod.preco}</li>
                            <li>quantidade :{prod.quantidade}</li>
                        </ul>
                        <div className="container-button-produto">
                            <button className="button-produto" 
                            onClick={() => 
                            deleteProdutos(prod._id)}
                            >Remove</button>
                            <Link className="button-produto-edit"  
                            to={"/EditarProdutos/" + prod._id}
                            >Edit</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>
    );
}