import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./styles/home.css"

const About = () => { 
    return (
        <>
            <Nav></Nav>
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
                <div className = "main-footer">

                    <div style = { {display: 'grid'} }>
                        <h2 className = "quemSomos-title">Quem somos</h2>
                    </div>

                    <div style = { {marginLeft: "18%"} }>
                        <p className = "quemSomos-txt"> 
                            A Residência Pedagógica é um programa financiado pela CAPES que visa a inserção de estudantes de licenciatura no contexto escolar, 
                            bem como a produção de aulas e materiais didáticos (tipo esse site!).
                        </p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default About 