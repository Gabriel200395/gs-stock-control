import React from 'react'
import './Form.css' 
import {useHistory} from 'react-router-dom'


export default function Form() {

 const history  = useHistory();   

const handleSunmit = (e) => {
    e.preventDefault()
    history.push("/ListaProdutos")

}


     return (
          <div className="form-cadastro-usuario">
               <form className="container"
               onSubmit={handleSunmit}
               >
                    <input type="text"
                         name="empresa"
                         placeholder="empresa"
                    />
                    <input type="text"
                         name="gmail"
                         placeholder="gmail"
                    />
                    <input type="text"
                         name="telefone"
                         placeholder="telefone"
                    />
                    <input type="text"
                         name="cidade"
                         placeholder="cidade"
                    />
                    <input
                         type="text"
                         name="uf" placeholder="uf"
                    />
                    <button>Enviar</button>
               </form>
               <p className="sistema-cadastro">Gs Control Sistem</p>
          </div>
     );

}
