import React from "react";

const Card = (props) => {

    return (
        <div>

            <h2>{props.title}</h2>

            <div style = {{width: "50%"}}>
                <img src = {`./imgs/${props.img}.svg`} alt = {`${props.title}`} style = {{width: "50%"}}/>
            </div> 

            <p>{props.txt}</p>

        </div>

    )
}

export default Card
