
import React, { useEffect, useState } from 'react'
import './card.css'
import axios from 'axios'

export default function UsuarioCard() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function buscar() {
            const res = await axios.get("http://localhost:8080/usuario");
            setUsuarios(res.data.usuarios);
        }
        buscar();
    }, []);

    return (

        <section className="card">
            <div className="container">
                {usuarios.map((usuario) => (
                        <div className="card-container" key={usuario._id}>
                            <div className="container-titulo">
                                <h3 className="titulo">{usuario.empresa}</h3>
                            </div>
                            <ul className="lista">
                                <li>nome-produto</li>
                                <li>descricao</li>
                                <li>preco</li>
                                <li>quantidade-produto</li>
                                <li>imagem</li>
                            </ul>
                            <div className="container-button">
                                <button>Cadastrar Produto</button>
                            </div>
                        </div>
                ))
                }
            </div>
        </section>
        
    );

}
