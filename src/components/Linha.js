import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Card from "./Card";
import Item from "./Item";

const Linha = () => {
    return (
        <div>
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