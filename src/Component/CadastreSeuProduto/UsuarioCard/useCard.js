import { useEffect, useState } from 'react'
import axios from 'axios'

const useCard = () => {
    const [listEmpresa, setEmpresa] = useState([]); // state para trazer os empresa

    useEffect(() => {
        async function buscar() {
            const res = await axios.get("http://localhost:8080/empresa");
            setEmpresa(res.data.listEmpresa);
        }
        buscar();
    }, []);

    return [listEmpresa];

}

export default useCard;


