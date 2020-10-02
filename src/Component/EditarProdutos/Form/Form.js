import React  from 'react'
import './Form.css' 


export default function Form() {


   return (
        <div className="form-editar-produto">
             <form className="container"
             >
                  <input type="text"
                       name="produto"
                       placeholder="produto"
                  />
                  <input type="text"
                       name="descricao"
                       placeholder="descricao"
                  />
                  <input type="text"
                       name="preco"
                       placeholder="preco"
                  />
                  <input type="text"
                       name="quantidade"
                       placeholder="quantidade"
                  />
                  <input type="text"
                       name="imagem"
                       placeholder="imagem"
                  />
                  <button>Enviar</button>
             </form>
             <p className="sistema-cadastro">Gs Control Sistem</p>
        </div>
   ); 

}