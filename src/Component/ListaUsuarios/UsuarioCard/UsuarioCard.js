
import React from 'react'
import useCard from './useCard'
import './card.css'
import { Link } from 'react-router-dom'
export default function UsuarioCard() {


    const [handleInputChange, deleteUser, usuarioFiltrado, filtro] = useCard('');

    return (

        <section className="card">
            <div className="buscador-usuarios">
                <input type="text"
                    value={filtro}
                    placeholder="Buscar Empresas"
                    onChange={handleInputChange}
                />
            </div>
            <div className="container">
                {usuarioFiltrado.map((usuario) => (
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
                            <Link to={"/VisualizarProduto/" + usuario._id} 
                            className="editar">Ver Produto</Link>
                            <button onClick={() => deleteUser(usuario._id)} 
                            className="remover">
                            remover</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </section>

    );

}
