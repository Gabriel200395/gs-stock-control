
import React from 'react'
import useCard from './useCard'
import './card.css'
import { Link } from 'react-router-dom'
export default function UsuarioCard() {


    const [usuarios] = useCard('');

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
                        <div className="container-button">
                            <Link to={"/CadastrarProduto/" + usuario._id} className="buttonCadastro">Cadastrar Produto</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>

    );

}
