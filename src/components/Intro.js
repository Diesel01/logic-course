import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Question from "./Introduction course/Question";
import Justification from "./Introduction course/Justification";
import {IntroTxt, InducExplanation, DeducExplanation} from "./Introduction course/Explanations";
import DraggableQuestions from "./Introduction course/ExerciseIntro"
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
        txt: ["Toda filósofa usa sandálias.", "Maria é uma filosofa.", "Logo?"],
        options: [
            { opt: "deduc2_opt0", txt: "Maria usa sandálias", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "deduc2_opt1", txt: "Filósofas nao usam sandalias", justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "deduc2_opt2", txt: "Platão é careca", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }
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

    const [displayIntroTxt, setDisplayIntroTxt] = useState(false)
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

            {/* <main> */}

            <DraggableQuestions /> 

            { displayIntroTxt ?
                <div className="outer-question-div">
                    <IntroTxt />

                    <button
                        onClick={() => {
                            setDisplayIntroTxt(false);
                            setDisplayQuestion(true);
                        }}
                        style={{ marginTop: "2%" }}
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
                    <DeducExplanation answers = {inducAnswers} justifications={justifications} />
                </div>
                :
                null
            }

            {/* </main> */}
        </>
    )
}
export default Intro