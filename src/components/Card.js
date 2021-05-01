import React from "react";

const Card = (props) => {

    return (
        <div style = {{
            display: "grid",
            background: "#FCFCFC",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "49px",
            width: "110%", 
            gridTemplateRows: "auto auto auto", 
            justifyContent: "center"
        }}>

            <h2 style = {{margin: "auto"}}>{props.title}</h2>

                <img src = {`./imgs/${props.img}.svg`} alt = {`${props.title}`}/>

            <p style = {{
                margin: "auto", 
                paddingBottom: "5%"
            }}>
                {props.txt}
            </p>

        </div>

    )
}

export default Card
