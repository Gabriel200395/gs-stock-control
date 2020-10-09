import { useEffect, useState } from 'react'
import axios from 'axios'

const useCard = () => {
    const [usuarios, setUsuarios] = useState([]); // state para trazer os usuarios
    const [usuarioFiltrado, setUsuarioFiltrado] = useState([])// state para filtrar os dados do usuario
    const [filtro, setFiltro] = useState('')  // state para filtrar o value do meu input

    const handleInputChange = e => {

        const { value } = e.target
        setFiltro(value)
        setUsuarioFiltrado(usuarios.filter(usuario => usuario.empresa.includes(value)
        ))
    };

    useEffect(() => {
        async function buscar() {
            const res = await axios.get("http://localhost:8080/usuario");
            setUsuarioFiltrado(res.data.usuarios);
            setUsuarios(res.data.usuarios);
        }
        buscar();
    }, []);


     //deve esta errado
    const deleteUser = async(_id) => {
        const usuario = usuarios.filter(usuario => usuario._id !== _id);        
        try{
        const res = await axios.delete(`http://localhost:8080/usuario/${_id}`);
        setUsuarioFiltrado(usuario);
        setUsuarios(usuario);        
        console.log(usuario)
        console.log(res.data);
       }catch(err){
           console.log("erro ao excluir usuario");
       }
    }

    return [handleInputChange, deleteUser, usuarioFiltrado, filtro];

}

export default useCard;


