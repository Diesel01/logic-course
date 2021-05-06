import React from "react";
import {Link} from "react-router-dom";
import Card from "./Card";
import Nav from "./Nav";

const Linha = () => {
    return (
        <main>
            <Nav></Nav>
            
             <div style = {{
                    display: "grid", 
                    gridTemplateColumns: "auto auto auto", 
                    justifyContent: "space-evenly", 
                    alignContent: "center",
                    marginTop: "8%", 
                    marginLeft: "-3%"
                }}>
                
                <div style = {{width: "105%"}}>
                    <Link to = "/intro">
                        <Card { ...{title: "Introdução à lógica", img: 'intro-card', txt: "É que nem matemática, só que mais legal!"}} />
                    </Link>
                </div>

                <div style = {{width: "105%"}}>
                    <Link to = "/item/silogismo">
                        <Card { ...{ title: "Silogismo", img: 'silogismo-card', txt: "Pense como Aristóteles!" } }/>
                    </Link>
                </div>

                <div style = {{width: "105%"}}>
                    <Link to = "/item/lógica_proposicional">
                        <Card { ...{ title: "Lógica proposicional", img: "lógica_proposicional-card", txt: "Pense como um computador!" }} />
                    </Link>
                </div>
                
            </div>
            
        </main>
    )
}

export default Linha