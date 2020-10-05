import { useEffect, useState } from 'react'
import axios from 'axios'

const useCard = () => {
    const [usuarios, setUsuarios] = useState([]); // state para trazer os usuarios

    useEffect(() => {
        async function buscar() {
            const res = await axios.get("http://localhost:8080/usuario");
            setUsuarios(res.data.usuarios);
        }
        buscar();
    }, []);

    return [usuarios];

}

export default useCard;


