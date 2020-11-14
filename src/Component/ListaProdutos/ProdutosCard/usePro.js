import { useEffect, useState } from 'react'
import axios from 'axios'

const usePro = () => {
    const [produto, setProduto] = useState([])

    useEffect(() => {
        async function produto() {
            const res = await axios.get("http://localhost:8080/produtos");
            setProduto(res.data.produto);
        }
        produto();
    }, []);


    const deleteProdutos = async (_id) => {
        try {
            const res = await axios.delete(`http://localhost:8080/produtos/${_id}`);
            setProduto(produto.filter(pro => pro._id !== _id));
            console.log(res.data);
        } catch (err) {
            console.log("error ao excluir dados");
        }
    }   
    
    return [produto, deleteProdutos];

}

export default usePro;
