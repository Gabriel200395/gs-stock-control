
import { useState } from 'react'
import axios from 'axios'

const useForm = (Callback) => {

    const [usuario, setUsuarios] = useState({});

    const handleChange = (event) => {
        setUsuarios({
            ...usuario,
            [event.target.name]:
                event.target.value
        });
    }

    const handleSubmit = Callback => event => {
        event.preventDefault();
        console.log(usuario);
        enviarData();
    }



    const enviarData =  () => {
        axios.post("http://localhost:8080/usuario", usuario).then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log("error ao enviar os dados");
        })
    }
    

    return [handleChange, handleSubmit, enviarData];

}  

export default useForm;