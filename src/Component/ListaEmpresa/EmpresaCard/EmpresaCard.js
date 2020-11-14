
import React from 'react'
import useCard from './useCard'
import './card.css'
import { Link } from 'react-router-dom'
export default function EmpresaCard() {


    const [handleInputChange, deleteUser, empresaFiltrado, filtro] = useCard('');

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
                {empresaFiltrado.map((empresa) => (
                    <div className="card-container" key={empresa._id}>
                        <div className="container-titulo">
                            <h3 className="titulo">{empresa.empresa}</h3>
                        </div>
                        <ul className="lista">
                            <li>nome da empresa : {empresa.empresa}</li>
                            <li>Gmail :{empresa.gmail}</li>
                            <li>telefone: {empresa.telefone}</li>
                            <li>cidade: {empresa.cidade}</li>
                            <li>Uf: {empresa.uf}</li>

                        </ul>
                        <div className="container-button">
                            <Link to={"/VisualizarProduto/" + empresa._id} 
                            className="editar">Ver Produto</Link>
                            <button onClick={() => deleteUser(empresa._id)} 
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
