import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const useVisualizar = () => {

    const [produto, setProduto] = useState([]);
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        async function buscarDataProduto() {
            const res = await axios.get(`http://localhost:8080/empresa/${id}/produtos`)
            setProduto(res.data.produtos);
        }
        buscarDataProduto()
    }, [id])



    return [produto];
}

export default useVisualizar;