import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {Form, Input} from '@rocketseat/unform'
import * as Yup from 'yup'
import './Form.css'


export default function FormCadastro() {
       
     const history = useHistory();

     const schema = Yup.object().shape({  
          empresa: Yup.string().required("escreva nome da sua empresa"),
          gmail: Yup.string().required("escreva seu email corretamente"),
          telefone: Yup.string().required("escreva seu telefone"),
          cidade: Yup.string().required("escreva o nome da sua cidade"),
          uf: Yup.string().required("escreva o seu Uf"),
     }) 

     const handleSubmit = async (data) => {
        try{ 
          const res = axios.post("http://localhost:8080/usuario", data);
          console.log(res.data.usuarios)
        }catch(err){
          console.log("error ao enviar os dados");
        }
        history.push("/CadastreSeuProduto")
     }  
     
    return (
         <div className="form-cadastro-produto">
              <Form className="container"
                   schema={schema}
                   onSubmit={handleSubmit}
              >
                   <Input type="text"
                        name="empresa"
                        id="empresa"
                        placeholder="empresa"
                   />
                   <Input type="text"
                        name="gmail"
                        id="gmail"
                        placeholder="gmail"
                   />
                   <Input type="text"
                        name="telefone"
                        id="telefone"
                        placeholder="telefone"
                   />
                   <Input type="text"
                        name="cidade"
                        id="cidade"
                        placeholder="cidade"
                   />
                   <Input
                        type="text"
                        name="uf" 
                        id="uf" 
                        placeholder="uf"
                   />
                   <button>Enviar</button>
              </Form>
              <p className="sistema-cadastro-produto">Gs Control Sistem</p>
         </div>
    );

}
