import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./styles/nav.css"

const Nav = () => { 

    const [homeSelected, setHomeSelected] = useState(true)
    const [indiceSelected, setIndiceSelected] = useState(false)

    useEffect( () => {
        const url = window.location.href; 

        if (url.indexOf('/linha') === -1){
            console.log('hi')
            setHomeSelected(true);
            setIndiceSelected(false)
        }
        else{
            setHomeSelected(false);
            setIndiceSelected(true) 
        }
    }, [])

    return( 
        <nav className = "main-nav">
            <ul className = "nav-list"> 
                <li className = "nav-item"> 
                    <div className = {`${homeSelected ? "selected-pill" : "nav-pill"}`} >
                        <Link to = "/" style = { homeSelected ? {color: "white"} : null }>               
                            Home
                        </Link>
                    </div>
                </li>

                <li className = "nav-item">
                    <div className = {`${indiceSelected ? "selected-pill" : "nav-pill"}`} >
                        <Link to = "/linha" style = { indiceSelected ? {color: "white"} : null }>
                            Índice
                        </Link>      
                    </div>
                </li>
            </ul>  
        </nav>
    )
}

export default Nav