import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css"

const About = () => { 
    return (
        <>
            <div className = "main-div">
                <div className = "img-div">
                    <img className = "main-img" src = "./imgs/home.svg" alt = "Lógica"></img>
                </div>
                    
                <div className = "txt-div"> 
                    <h1 className = "main-title">
                        Bem-vindxs ao curso de Lógica e Argumentação!
                    </h1>

                    <div>
                        <p className = "home-txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
                        </p>

                        <p className = "home-txt">
                            Odio ut sem nulla pharetra diam. Suspendisse in est ante in.
                            WJlskfjdsf sfjlsdfj dfkgjflg fkgjsdlfk dfjs slfjsgf. 
                            sdklgjlsgj, dsfklj fssgs dfkfk dsfosdgdgg
                        </p>
                    </div>

                    <div className = "link-pill">
                        <Link to = "/linha" className = "home-link">
                            Clique aqui para começar
                        </Link>
                    </div>
                </div>
            </div>

            <footer>
                TODO: foofer
            </footer>
        </>
    )
}

export default About 