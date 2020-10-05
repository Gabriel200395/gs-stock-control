import axios from 'axios'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'

const useProdutos = (callback) => {

    const [produto, setProduto] = useState({}); 
    const history  = useHistory();   
 
    const handleChange = (e) => {
        setProduto({
            ...produto,
            [e.target.name]:
                e.target.value
        });
    }
        const handleSubmit = callback => event => {
            event.preventDefault();
            enviarProdutos();
            history.push("/ListaProdutos")
        };

        const enviarProdutos = async () => {
            try {
                const res = await axios.post("http://localhost:8080/produto", produto);
                console.log(res.data)
            } catch (err) {
                console.log("error ao enviar dados na api");
            }
        };

        return [handleChange, handleSubmit, enviarProdutos];

    
}

export default useProdutos;