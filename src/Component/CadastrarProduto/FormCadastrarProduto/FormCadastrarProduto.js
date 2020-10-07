import React, { useState }  from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './Form.css' 
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'


export default function FormCadastrarProduto() {
     
     const history  = useHistory(); 
     const [produto, setProduto] = useState({})  

     const schema  = Yup.object().shape({
          produto: Yup.string().required("Escreva o nome do produto"),
          descricao: Yup.string().required("Escreva uma descricao"),
          quantidade: Yup.number().typeError("Escreva a quantidade de produtos"),
          preco: Yup.number().typeError("Escreva o preco dos produtos"),  
          imagem: Yup.string().required("url da imagem em formato png, jpeg, jpg, svg")
     });

     const handleSubmit  = async (produto) => {
          try {
               const res = await axios.post("http://localhost:8080/produto", produto);
               setProduto(res.data.produto)
           } catch (err) {
               console.log("error ao enviar dados na api");
           }
          history.push("/ListaProdutos")
      };

     return (
          <div className="form-cadastro-usuario">
               <Form className="container"
               schema={schema}
               onSubmit={handleSubmit}
               >
                    <Input type="text"
                         name="produto"
                         id="produto"
                         placeholder="produto"
                    />
                    <Input type="text"
                         name="descricao"
                         id="descricao"
                         placeholder="descricao"
                    />
                    <Input type="text"
                         name="preco"
                         id="preco"
                         placeholder="preco"
                    />
                    <Input type="text"
                         name="quantidade"
                         id="quantidade"
                         placeholder="quantidade"
                    />
                    <Input type="text"
                         name="imagem"
                         id="imagem"
                         placeholder="imagem"
                    />
                    <button type='submit'>Enviar</button>
               </Form>
               <p className="sistema-cadastro">Gs Control Sistem</p>
          </div>
     );

}