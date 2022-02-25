import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Nav from "./Nav";
import "./styles/card.css"

const Linha = () => {
    const storage = window.localStorage;

    const [progress, setProgress] = useState("intro")

    useEffect(() => {
        if (storage.getItem("progress") === null){
            storage.setItem("progress", "intro");
        }
        setProgress(storage.getItem("progress"));  

    }, [storage])

    return (
        <>
            <Nav />

            <main>

                <div className="main-div-linha">

                    <div style={{ display: "grid" }}>
                        <div className={progress === "intro" ? "current-progress-card" : "card-div"}>
                            <Link to="/intro">
                                <Card {...{ title: "Introdução à lógica", img: 'intro-card', txt: "É que nem matemática, só que mais legal!" }} />
                            </Link>
                        </div>

                        {progress === "intro" ?
                            <div className="comece-aqui">
                                <p>Comece aqui!</p>
                            </div>
                            :
                            null
                        }
                    </div>

                    <div style={{ display: "grid" }}>
                        <div className={progress === "silogismo" ? "current-progress-card" : "card-div"}>
                            <Link 
                                to = {progress === "silogismo" ? "/silogismo" : "/item/silogismo"}
                            >
                                <Card {...{ title: "Silogismo", img: 'silogismo-card', txt: "Pense como Aristóteles!" }} />
                            </Link>
                        </div>

                        {progress === "silogismo" ?
                             <div className="comece-aqui">
                                <p>Clique aqui!</p>
                            </div>
                            :
                            null
                        }
                    </div>


                    <div style={{ display: "grid" }}>
                        <div className={progress === "logicaProposicional" ? "current-progress-card" : "card-div"}>
                            <Link 
                                to = {progress === "logicaProposicional" ? "/lógica_proposicional" : "/item/lógica_proposicional"}
                            >
                                <Card {...{ title: "Lógica proposicional", img: "lógica_proposicional-card", txt: "Pense como um computador!" }} />
                            </Link>
                        </div>

                        {progress === "logicaProposicional" ?
                            <div className="comece-aqui">
                                <p>Clique aqui!</p>
                            </div>
                            :
                            null
                        }
                    </div>

                </div>

            </main>

        </>
    )
}

export default Linha