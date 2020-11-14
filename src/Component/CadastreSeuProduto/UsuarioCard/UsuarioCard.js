
import React from 'react'
import useCard from './useCard'
import './card.css'
import { Link } from 'react-router-dom'
export default function UsuarioCard() {


    const [listEmpresa] = useCard('');

    return (

        <section className="card">
            <div className="container">
                {listEmpresa.map((Empresa) => (
                    <div className="card-container-usuario" key={Empresa._id}>
                        <div className="container-titulo">
                            <h3 className="titulo">{Empresa.empresa}</h3>
                        </div>
                        <ul className="lista">
                            <li>nome da empresa : {Empresa.empresa}</li>
                            <li>Gmail :{Empresa.gmail}</li>
                            <li>telefone: {Empresa.telefone}</li>
                            <li>cidade: {Empresa.cidade}</li>
                            <li>Uf: {Empresa.uf}</li>

                        </ul>
                        <div className="container-button">
                            <Link to={"/CadastrarProduto/" + Empresa._id} className="buttonCadastro">Cadastrar Produto</Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>

    );

}
