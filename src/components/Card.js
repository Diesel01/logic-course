import React from "react";
import "./styles/card.css"

const Card = (props) => {

    return (
        <div>

            <h2 className = "card-h2">{props.title}</h2>
            
            <img className = "img-card" src = {`./imgs/${props.img}.svg`} alt = {`${props.title}`}/>

            <p className = "card-txt">
                {props.txt}
            </p>

        </div>

    )
}

export default Card
