import axios from 'axios'
import { useEffect, useState } from 'react'

const useVisualizar = () => {
        
    const [produto, setProduto] = useState([]);        

        async function visualizarProduto(id){
            const res = await axios.get(`http://localhost:8080/usuario/${id}/produtos`);
            setProduto(res.data.produtos);
        }
     

    return [produto, visualizarProduto];
}

export default useVisualizar;