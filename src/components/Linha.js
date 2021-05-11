import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Card from "./Card";
import Nav from "./Nav";
import "./styles/card.css"

const Linha = () => {
    const [progress, setProgress] = useState("intro")
    const storage = window.localStorage;

    useEffect( () => {
        storage.setItem("progress", progress)
    }, [progress, storage])

    return (
        <main>
            <Nav/>
            
             <div className = "main-div-linha">

                <div>
                    <div  className = "card-div">
                        <Link to = "/intro">
                            <Card { ...{title: "Introdução à lógica", img: 'intro-card', txt: "É que nem matemática, só que mais legal!"}} />
                        </Link>
                    </div>
                    {progress === "intro" ? null : <img src = "./imgs/lock.svg" alt = "Bloqueado" className = "locked-icon" />}
                </div>

                <div style = {{display: "grid"}}>
                    <div className = "card-div">
                        <Link to = "/item/silogismo">
                            <Card { ...{ title: "Silogismo", img: 'silogismo-card', txt: "Pense como Aristóteles!" } }/>
                        </Link>
                    </div>
                    {progress === "silogismo" ? null : <img src = "./imgs/lock.svg" alt = "Bloqueado" className = "locked-icon" />}
                </div>
                

                <div style = {{display: "grid"}}> 
                    <div className = "card-div">
                        <Link to = "/item/lógica_proposicional">
                            <Card { ...{ title: "Lógica proposicional", img: "lógica_proposicional-card", txt: "Pense como um computador!" }} />
                        </Link>
                    </div>
                    {progress === "logicaProposicional" ? null : <img src = "./imgs/lock.svg" alt = "Bloqueado" className = "locked-icon" />}
                </div>
                
            </div>
            
        </main>
    )
}

export default Linha