import { useEffect, useState } from 'react'
import axios from 'axios'

const useCard = () => {
    const [listEmpresa, setListEmpresa] = useState([]); // state para trazer os Empresa
    const [empresaFiltrado, setEmpresaFiltrado] = useState([])// state para filtrar os dados do Empresa
    const [filtro, setFiltro] = useState('')  // state para filtrar o value do meu input

    const handleInputChange = e => {

        const { value } = e.target
        setFiltro(value)
        setEmpresaFiltrado(listEmpresa.filter(empresa => empresa.empresa.includes(value)
        ))
    };

    useEffect(() => {
        async function buscar() {
            const res = await axios.get("http://localhost:8080/empresa");
            setEmpresaFiltrado(res.data.listEmpresa);
            setListEmpresa(res.data.listEmpresa);
        }
        buscar();
    }, []);


     //deve esta errado
    const deleteUser = async(_id) => {
        const empresa = listEmpresa.filter(empresa => empresa._id !== _id);        
        try{
        const res = await axios.delete(`http://localhost:8080/empresa/${_id}`);
        setEmpresaFiltrado(empresa);
        setListEmpresa(empresa);        
        console.log(empresa)
        console.log(res.data);
       }catch(err){
           console.log("erro ao excluir usuario");
       }
    }

    return [handleInputChange, deleteUser, empresaFiltrado, filtro];

}

export default useCard;


