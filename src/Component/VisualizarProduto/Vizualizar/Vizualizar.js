import React from 'react'
import './visualizar.css'
import useVisualizar from './useVisualizar';

export default function Vizualizar() {

    const [produto] = useVisualizar('');

    return (
        <section className="card">
            <div className="container">
                {produto.map((prod) => (
                    <div className="card-container-visualizar" key={prod._id}>
                        <div className="container-titulo-visualizar">
                            <h3 className="titulo-visualizar">{prod.produto}</h3>
                        </div>
                        <img className="produto-imagem-visualizar"
                            src={prod.imagem}
                            alt="imagem"
                        />
                        <ul className="lista-visualizar">
                            <li>Descricao : {prod.descricao}</li>
                            <li>Preco : {prod.preco}</li>
                            <li>Quantidade : {prod.quantidade}</li>
                        </ul>
                    </div>
                ))
                }
            </div>
        </section>
    );

}
