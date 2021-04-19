import React, {useState, useEffect} from "react";

const Card = (props) => {

    return (
        <div>

            <h2>{props.title}</h2>

            <div style = {{width: "50%"}}>
                <img src = {`./imgs/${props.img}.jpg`}  style = {{width: "50%"}}/>
            </div>

            <p>{props.txt}</p>

        </div>

    )
}

export default Card
