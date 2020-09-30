import React from 'react'
import './Form.css'
import useForm from './useForm';
export default function Form() {

    const [handleChange, handleSubmit, enviarData] = useForm('')

    return (
         <div className="form-cadastro-usuario">
              <form className="container"
                   onSubmit={handleSubmit(enviarData)}
              >
                   <input type="text"
                        name="empresa"
                        placeholder="empresa"
                        onChange={handleChange}
                   />
                   <input type="text"
                        name="gmail"
                        placeholder="gmail"
                        onChange={handleChange}
                   />
                   <input type="text"
                        name="telefone"
                        placeholder="telefone"
                        onChange={handleChange}
                   />
                   <input type="text"
                        name="cidade"
                        placeholder="cidade"
                        onChange={handleChange}
                   />
                   <input
                        type="text"
                        name="uf" placeholder="uf"
                        onChange={handleChange}
                   />
                   <button>Enviar</button>
              </form>
              <p className="sistema-cadastro">Gs Control Sistem</p>
         </div>
    );

}
