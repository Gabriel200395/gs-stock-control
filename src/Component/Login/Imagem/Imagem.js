import React from 'react' 
import './Imagem.css'
export default  function Imagem({url, alt}){
    return(
        <section>
            <img className="imagem" src={url} alt={alt}/>
            <p className="sistema">Gs Control Sistem</p>
        </section>
    )
}
