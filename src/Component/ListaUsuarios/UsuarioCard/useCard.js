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

    return [handleInputChange, usuarioFiltrado, filtro];

}

export default useCard;


