import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import {inductionsQuestionsArray, deductionQuestionsArray} from './Introduction course/QuestionsData'; 
import Question from "./Introduction course/Question";
import Justification from "./Introduction course/Justification";
import {IntroTxt, InducExplanation, DeducExplanation} from "./Introduction course/Explanations";
import ExerciseIntro from "./Introduction course/ExerciseIntro"
import './styles/Intro.css';

const Intro = () => {
    const [inductionQ, setInductionQ] = useState(inductionsQuestionsArray[0]); // object with text, altennatives, justifications and id props. 

    const [inducAnswers, setInducAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState({});

    const [justifications, setJustifications] = useState({});
    const [selectedJustification, setSelectedJustification] = useState("");

    const [finsishedInductions, setFinsishedInductions] = useState(false);
    const [finishedDeductions, setFinsishedDeductions] = useState(true); ////////////////////

    const [displayIntroTxt, setDisplayIntroTxt] = useState(false); ///////////////////////
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

            <main>
         
            { displayIntroTxt ?
                <div className="outer-question-div">
                    <IntroTxt />

                    <button
                        tabIndex = {0}
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
                        tabIndex = {0}
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
                            tabIndex = {0}
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
                        tabIndex = {0}
                        onClick={() => {
                            setInductionQ(deductionQuestionsArray[0]);
                            setDisplayQuestion(true);
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
                    <button
                        className = "nextQuestionBtn"
                        tabIndex = {0}
                        onClick = {() => {
                            setFinsishedDeductions(true); 
                            setDisplayExplanation("x");
                        }}
                    >
                        Clique aqui para continuar
                    </button>
                </div>
                :
                null
            }

            {finishedDeductions ?      
                <div className = "outer-question-div">
                    <ExerciseIntro />             
                </div>
                :
                null
            }

            </main>
        </>
    )
}
export default Intro