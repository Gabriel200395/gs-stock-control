import React from 'react' 
import './nav.css'
import {Link}  from 'react-router-dom'

export default function Nav(){

     return(
         <nav className="nav">
            <Link className="button" to="/">Home</Link>
         </nav>
     )
}
