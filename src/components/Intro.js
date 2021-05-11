import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Question from "./Introduction course/Question";
import Justification from "./Introduction course/Justification";
import {InducExplanation} from "./Introduction course/Explanations";
import './styles/Intro.css';

const inductionsQuestionsArray = [
    {
        id: "induc0",
        txt: ["Ao abrir uma torneira, o que provavelmente vai sair depois?"],
        options: [
            { opt: "induc0_opt0", txt: "Sair água", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc0_opt1", txt: "Sair sangue", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc0_opt2", txt: "Não sair água", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }
        ],
    },

    {
        id: "induc1",
        txt: ["Você vê uma pessoa carregando uma caixa de madeira escrito: maçãs. O que possivelmente há dentro dela?"],
        options: [
            { opt: "induc1_opt0", txt: "Maçãs", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc1_opt1", txt: "Bananas", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc1_opt2", txt: "Uma galinha", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }
        ]
    },

    {
        id: "induc2",
        txt: ["No outro lado da rua você vê um homem vestido de bombeiro. Qual é possivelmente a ocupação dele?"],
        options: [
            { opt: "induc2_opt0", txt: "Bombeiro", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc2_opt1", txt: "Gerente", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc2_opt2", txt: "Estudante", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc2_opt3", txt: "Desempregado", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }
        ]
    }
]

const deductionQuestionsArray = [
    {
        id: "deduc0",
        txt: ["Todo meme é dank.", "Esse site é um meme.", "Logo?"],
        options: [
            { opt: "deduc0_opt0", txt: "Eu sou dank", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "deduc0_opt1", txt: "Esse site é dank", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "deduc0_opt2", txt: "Esse site não é dank", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }
        ]
    },

    {
        id: "deduc1",
        txt: ["Todo youtuber fala alto.", "PC Siqueira é um youtuber.", "Logo?"],
        options: [
            { opt: "deduc1_opt0", txt: "PC Siqueira é uma galinha", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "deduc1_opt1", txt: "Felipe Neto fala alto", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "deduc1_opt2", txt: "PC Siqueira fala alto", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }
        ]
    },

    {
        id: "deduc2",
        txt: ["Toda filosofa usa sandalias.", "Maria e uma filosofa.", "Logo?"],
        options: [
            { opt: "deduc2_opt0", txt: "Maria usa sandalias", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "deduc2_opt1", txt: "Filosofas nao usam sandalias", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "deduc2_opt2", txt: "Platao e careca", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }
        ]
    },
]

const Intro = () => {
    const [inductionQ, setInductionQ] = useState(inductionsQuestionsArray[0]); // object with text, altennatives, justifications and id props. 

    const [inducAnswers, setInducAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState({});

    const [justifications, setJustifications] = useState({});
    const [selectedJustification, setSelectedJustification] = useState("");

    const [finsishedInductions, setFinsishedInductions] = useState(false);
    const [finishedDeductions, setFinsishedDeductions] = useState(true);

    const [displayIntroTxt, setDisplayIntroTxt] = useState(true)
    const [displayQuestion, setDisplayQuestion] = useState(false);
    const [displayJustifs, setDisplayJustifs] = useState(false);
    const [displayExplanation, setDisplayExplanation] = useState("");

    const storage = window.localStorage;

    useEffect(() => {
        let stringInducAnswers = JSON.stringify(inducAnswers)
        storage.setItem("answers", stringInducAnswers)
    }, [inducAnswers, storage])

    useEffect(() => {
        let stringfiedObj = JSON.stringify(justifications);
        storage.setItem("justifications", stringfiedObj);
    }, [justifications, storage]);

    const nextQuestion = () => {
        let array;
        finsishedInductions ? array = deductionQuestionsArray : array = inductionsQuestionsArray

        for (let i = 0; i < array.length; i++) {
            if (array[i].id === inductionQ.id) {
                if (array[i + 1] === undefined) {
                    setFinsishedInductions(true);
                    setDisplayQuestion(false);
                    displayExplanation === "" ? setDisplayExplanation("induction") : setDisplayExplanation("deduction")
                } else {
                    setInductionQ(array[i + 1]);
                    setDisplayQuestion(true)
                    break
                }
            }
        }
    }

    return (
        <>
            <Nav />

            { displayIntroTxt ?
                <div className="outer-question-div">
                    <h1 className="intro-txt-title">
                        Antes de começarmos...
                    </h1>

                    <p className='intro-hello'>
                        Olá!
                        <span role="img" aria-label="oi" style={{ padding: "1%" }}>👋</span>
                    </p>

                    <p className="intro-paragraph">
                        Suponho que tenha caído aqui por um link.
                        E provavelmente esse link estava no painel de sua turma ou algo do gênero, junto com alguma mensagem de convocação de sua professora,
                        assim por diante.
                    </p>

                    <p className="intro-paragraph">
                        Bom...
                    </p>

                    <p className="intro-paragraph">
                        Não entenda isso como um inconveniente; apesar de certo ar formal que o nome “lógica” transpareça,
                        acredite: trabalhamos bastante para que todo o conteúdo que você verá a seguir seja conveniente e engajante.
                        Aqui, iremos te apresentar um jeito com o qual você pode pensar e defender as suas crenças de modo claro e bem-feito.
                        Nossa principal tarefa sempre foi e sempre será <span className="highlight-txt">evitar o  raciocínio mal-feito</span>.
                    </p>

                    <p className="intro-paragraph">
                        Todo esse “curso” que vocês terão será em cima de suas escolhas durante um caminho que preparamos para vocês.
                        Não queremos obrigar vocês a nada, apenas queremos mostrar com mais calma e clareza algo que de certa maneira vocês já conhecem
                        e já se depararam em outros contextos.
                    </p>

                    <p className="intro-paragraph">
                        Nesse primeiro momento, iremos partir da noção que toda ideia precisa de uma <span className="highlight-txt">justificativa</span>.
                        A lógica nada mais é o estudo de como certas ideias conseguem sustentar outras. Além disso, com a lógica podemos criar justificativas para nossas crenças.
                        Para isso, agora vamos olhar como dois tipos de argumentos funcionam: <span className="highlight-txt">indução</span> e <span className="highlight-txt">dedução</span>.
                    </p>

                    <button
                        onClick={() => {
                            setDisplayIntroTxt(false);
                            setDisplayQuestion(true);
                        }}
                        style={{ width: "24%", marginTop: "2%" }}
                        className="nextQuestionBtn"
                    >
                        Clique aqui para continuar
                    </button>

                </div>
                :
                null
            }

            {displayQuestion ?
                <div className="outer-question-div">
                    <Question
                        question={inductionQ}
                        handler={setSelectedOption}
                    />
                    <button
                        className="nextQuestionBtn"
                        onClick={async () => {
                            if (selectedOption.opt === undefined) {
                                alert("Opa! Selecione uma alternativa para continuar")
                            } else {
                                setDisplayJustifs(true);
                                setDisplayQuestion(false);
                                await setInducAnswers({ ...inducAnswers, [inductionQ.id]: selectedOption.txt });
                            }
                        }}
                    >
                        Enviar resposta
                    </button>
                </div>
                :
                null
            }

            {displayJustifs ?
                <div className="outer-question-div">
                    <Justification
                        option={selectedOption}
                        handler={setSelectedJustification}
                    />

                    {inducAnswers[inductionQ.id] === undefined ?
                        null
                        :
                        <button
                            className="nextQuestionBtn"
                            onClick={async () => {
                                if (selectedJustification === "") {
                                    alert("Opa! Selecione uma alternativa para continuar")
                                } else {
                                    setDisplayJustifs(false);
                                    await setJustifications({ ...justifications, [inductionQ.id]: selectedJustification });
                                    nextQuestion();
                                    setSelectedOption({})
                                    await setSelectedJustification("")
                                    console.log(selectedJustification)
                                    //this callback needs to be async, 
                                    //because writing to localStorage takes longer than displaying info in "finsishedInductions" state
                                }
                            }}
                        >
                            Enviar justificação
                        </button>
                    }
                </div>
                :
                null
            }

            {displayExplanation === "induction" ?
                <div className="outer-question-div">
                    <InducExplanation answers={inducAnswers} justifications={justifications} />
                    <button
                        className="nextQuestionBtn"
                        onClick={() => {
                            setInductionQ(deductionQuestionsArray[0]);
                            setDisplayQuestion(true);
                            setFinsishedDeductions(false);
                            setDisplayExplanation("x")
                        }}
                    >
                        Clique aqui para continuar
                    </button>
                </div>
                :
                null
            }

            {displayExplanation === "deduction" ?
                <div className="outer-question-div">
                    <ul>Vc terminou! Essas foram suas respostas:
                        <li>Primeira pergunta: {inducAnswers.deduc0}. A sua justificativa foi: {justifications.deduc0}</li>
                        <li>Segunda pergunta: {inducAnswers.deduc1}. A sua justificativa foi: {justifications.deduc1}</li>
                        <li>Terceira pergunta: {inducAnswers.deduc2}. A sua justificativa foi: {justifications.deduc2}</li>
                    </ul>
                </div>
                :
                null
            }
        </>
    )
}
export default Intro