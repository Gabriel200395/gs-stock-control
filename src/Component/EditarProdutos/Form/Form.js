import React,{useEffect, useState} from 'react'
import './Form.css' 
import Axios from 'axios';

export default function Form(props) {
    
  const[Produto, setProduto] = useState({
     descricao: '',
     quantidade: '',
     imagem: '', 
     produto: '',
     preco:''
 });
 
   const[editar, setEditar] = useState(false)
    
   useEffect(()=> {
      async function loading(){
        const res = await Axios.get("http://localhost:8080/produto/" + props.match.params.id);
        setProduto({
             descricao: res.data.descricao, 
             quantidade: res.data.quantidade,
             imagem: res.data.imagem,
             produto: res.data.produto,
             preco: res.data.preco,
             _id: res.data,
             editar: true,
        })
      }   
      loading();
   },[props.match.params.id, setProduto]); 
 
   
   const handleSubmit = async (e) => {
        if(!editar){
         const _id = props.match.params.id 
         const res = await Axios.put("http://localhost:8080/produto/" + _id, Produto)     
         setEditar(res.data)
        }else{
         const res = await Axios.post("http://localhost:8080/produto/" + Produto);
         console.log(res.data)     
        }
   }
 
   const handleChange = (e) => {
      setProduto({...Produto,[e.target.name]: e.target.value});
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
                       value={Produto.produto}
                  />
                  <input type="text"
                       name="descricao"
                       placeholder="descricao"
                       onChange={handleChange}
                       value={Produto.descricao}
                  />
                  <input type="text"
                       name="preco"
                       placeholder="preco"
                       onChange={handleChange}
                       value={Produto.preco}
                  />
                  <input type="text"
                       name="quantidade"
                       placeholder="quantidade"
                       onChange={handleChange}
                       value={Produto.quantidade}
                  />
                  <input type="text"
                       name="imagem"
                       placeholder="imagem"
                       onChange={handleChange}
                       value={Produto.imagem}


                  />
                  <button>Enviar</button>
             </form>
             <p className="sistema-cadastro">Gs Control Sistem</p>
        </div>
   ); 

}