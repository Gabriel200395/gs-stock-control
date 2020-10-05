import React,{useEffect, useState} from 'react'
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
    
   useEffect(()=> {
      async function loading(){
        const res = await axios.get("http://localhost:8080/produto/" + props.match.params.id);
        setProduto({
          descricao: res.data.descricao, 
          quantidade: res.data.quantidade,
          imagem: res.data.imagem,
          produto: res.data.produto,
          preco: res.data.preco,
          _id: res.data,
     })
      }   
      loading();
   },[props.match.params.id, setProduto]); 
 
   
   const handleSubmit = async (e) => {
        if(!editar){
         const _id = props.match.params.id 
         const res = await axios.put("http://localhost:8080/produto/" + _id, produto)  
         setProduto({
          descricao: res.data.descricao, 
          quantidade: res.data.quantidade,
          imagem: res.data.imagem,
          produto: res.data.produto,
          preco: res.data.preco,
          _id: res.data,
     })  
        }else{
         const res = await axios.post("http://localhost:8080/produto/" + produto);
         console.log(res.data)     
        }
   }
 
   const handleChange = (e) => {
      setProduto({...produto,[e.target.name]: e.target.value});
   }  
   return (
        <div className="form-editar-produto">
             <form className="container"
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
             </form>
             <p className="sistema-cadastro">Gs Control Sistem</p>
        </div>
   ); 

}