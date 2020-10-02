import React  from 'react'
import './Form.css' 
import useProdutos from './useProdutos';


export default function Form() {

      const  [handleChange, handleSubmit, enviarProdutos] = useProdutos('');

     return (
          <div className="form-cadastro-usuario">
               <form className="container"
               onSubmit={handleSubmit(enviarProdutos)}
               >
                    <input type="text"
                         name="produto"
                         placeholder="produto"
                         onChange={handleChange}
                    />
                    <input type="text"
                         name="descricao"
                         placeholder="descricao"
                         onChange={handleChange}
                    />
                    <input type="text"
                         name="preco"
                         placeholder="preco"
                         onChange={handleChange}
                    />
                    <input type="text"
                         name="quantidade"
                         placeholder="quantidade"
                         onChange={handleChange}
                    />
                    <input type="text"
                         name="imagem"
                         placeholder="imagem"
                         onChange={handleChange}
                    />
                    <button>Enviar</button>
               </form>
               <p className="sistema-cadastro">Gs Control Sistem</p>
          </div>
     );

}
