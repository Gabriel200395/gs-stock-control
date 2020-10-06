import axios from 'axios'
import { useEffect, useState } from 'react'

const useVisualizar = () => {
        
    const [produto, setProduto] = useState([]);        

    useEffect(() => {
        async function visualizarProduto (){
            const res = await axios.get("http://localhost:8080/produto");
            setProduto(res.data.produto);
        }
        visualizarProduto();
    },[]); 
    
    return [produto];
}

export default useVisualizar;