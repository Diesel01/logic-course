import React from "react";
import {Link} from "react-router-dom";
import Card from "./Card";

const Linha = () => {
    return (
        <div 
            style = { {display: "grid", gridTemplateColumns: "auto auto auto", alignContent: "center", justifyContent: "center", placeContent: "space-evenly"} }
        >
            <Link to = "/intro">
                <Card { ...{title: "Introdução à lógica", img: 'intro-card', txt: "É que nem matemática, só que mais legal!"}} />
            </Link>

            <Link to = "/item/silogismo">
                <Card { ...{ title: "Silogismo", img: 'silogismo-card', txt: "Pense como Aristóteles!" } }/>
            </Link>

            <Link to = "/item/lógica_proposicional">
                <Card { ...{ title: "Lógica proposicional", img: "lógica_proposicional-card", txt: "Pense como um computador!" }} />
            </Link>
        </div>
    )
}

export default Linha