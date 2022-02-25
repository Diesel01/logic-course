import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./styles/home.css"

const About = () => {
    return (
        <>
            <Nav />

            <main>

                <div className="main-div">
                    <div className="img-div">
                        <img className="main-img" src="./imgs/home.svg" alt="Lógica"></img>
                    </div>

                    <div className="txt-div">
                        <h1 className="main-title">
                            Bem-vindxs ao curso de Lógica e Argumentação!
                    </h1>

                        <div>
                            <p className="home-txt">
                                Esse curso irá lhe ensinar a como pensar e argumentar mais claramente, com exemplos e exercícios voltados para o mundo real!
                            </p>

                            <p className="home-txt">
                                Você aprenderá como decompor um argumento,
                                porque Aristóteles é tão importante e como ter
                                discussões nas redes sociais.
                                O presente curso foi criado com o apoio da Residência Pedagógica - Filosofia da UFSM.
                            </p>
                        </div>

                        <div className="link-pill">
                            <Link to="/linha" className="home-link">
                                Clique aqui para começar
                            </Link>
                        </div>
                    </div>
                </div>

            </main>

            <footer>
                <div className="main-footer">

                    <div style={{ display: 'grid' }}>
                        <h2 className="quemSomos-title">Quem somos</h2>
                    </div>

                    <div className="quemSomos-txt-div">
                        <p className="quemSomos-txt">
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