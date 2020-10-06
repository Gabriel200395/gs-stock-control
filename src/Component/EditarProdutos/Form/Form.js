import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import './flexbox.css'
import './Form.css' 
import axios from 'axios';

export default function Form(props) {
    
  const[produto, setProduto] = useState({
     _id: '',
     descricao: '',
     quantidade: '',
     imagem: '', 
     produto: '',
     preco:''
 });
 
   const[editar, setEditar] = useState(false)
   const history = useHistory();  


   useEffect(()=> {
      async function loading(){
        const res = await axios.get("http://localhost:8080/produto/" + props.match.params.id);
        setProduto({
          descricao: res.data.idProduto.descricao, 
          quantidade: res.data.idProduto.quantidade,
          imagem: res.data.idProduto.imagem,
          produto: res.data.idProduto.produto,
          preco: res.data.idProduto.preco,
          _id: res.data.idProduto._id,
     })
     setEditar(editar)
      }   
      loading();
   },[props.match.params.id, setProduto]); 
 

   const handleSubmit = async (e) => { 
         e.preventDefault();
        if(!editar){
         const _id = props.match.params.id 
         const res = await axios.put("http://localhost:8080/produto/" + _id, produto);
         console.log(res.data) 
        }else{
         const res = await axios.post("http://localhost:8080/produto/" + produto);
         console.log(res.data)     
        }
        history.push("/ListaProdutos");
   }
 
   const handleChange = (e) => {
      setProduto({...produto,[e.target.name]: e.target.value});
   }  


   
   return (
     <section className="editar">
             <form className="form-editar-produto"
             onSubmit={handleSubmit}
             >
                  <input type="text"
                       name="produto"
                       placeholder="produto"
                       onChange={handleChange}
                       value={produto.produto}
                  />
                  <input type="text"
                       name="descricao"
                       placeholder="descricao"
                       onChange={handleChange}
                       value={produto.descricao}
                  />
                  <input type="text"
                       name="preco"
                       placeholder="preco"
                       onChange={handleChange}
                       value={produto.preco}
                  />
                  <input type="text"
                       name="quantidade"
                       placeholder="quantidade"
                       onChange={handleChange}
                       value={produto.quantidade}
                  />
                  <input type="text"
                       name="imagem"
                       placeholder="imagem"
                       onChange={handleChange}
                       value={produto.imagem}


                  />
                  <button>Enviar</button>
                  <p className="sistema-cadastro">Gs Control Sistem</p>
             </form>
   </section>
   ); 

}