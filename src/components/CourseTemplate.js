import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Question from "./Introduction course/Question";
import Justification from "./Introduction course/Justification";
import DraggableQuestions from "./Introduction course/DraggableQuestions"
import './styles/Intro.css';

const CourseTemplate = ({Intro, FirstExplanation, SecondExplanation, QuestionsData, DraggableQuestionsData, progressAfter}) => {
    const [question, setQuestion] = useState(QuestionsData.firstSetofQuestions[0]); // object with text, altennatives, justifications and id props. 

    const [Answers, setAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState({});

    const [justifications, setJustifications] = useState({});
    const [selectedJustification, setSelectedJustification] = useState("");

    const [finsishedFirstSetQuestions, setFinsishedFirstSetQuestions] = useState(false);
    const [finishedSecondSetQuestions, setFinsishedSecondSetQuestions] = useState(false); 

    const [displayIntroTxt, setDisplayIntroTxt] = useState(true);
    const [displayQuestion, setDisplayQuestion] = useState(false);
    const [displayJustifs, setDisplayJustifs] = useState(false);
    const [displayExplanation, setDisplayExplanation] = useState("");

    const storage = window.localStorage;

    useEffect(() => {
        let stringAnswers = JSON.stringify(Answers)
        storage.setItem("answers", stringAnswers)
    }, [Answers, storage])

    useEffect(() => {
        let stringfiedObj = JSON.stringify(justifications);
        storage.setItem("justifications", stringfiedObj);
    }, [justifications, storage]);

    const nextQuestion = () => {
        let array;
        finsishedFirstSetQuestions ? array = QuestionsData.secondSetofQuestions : array = QuestionsData.firstSetofQuestions

        for (let i = 0; i < array.length; i++) {
            if (array[i].id === question.id) {
                if (array[i + 1] === undefined) {
                    setFinsishedFirstSetQuestions(true);
                    setDisplayQuestion(false);
                    displayExplanation === "" ? setDisplayExplanation("firstSet") : setDisplayExplanation("secondSet")
                } else {
                    setQuestion(array[i + 1]);
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
                    <Intro />

                    <button
                        tabIndex = {0}
                        onClick={() => {
                            setDisplayIntroTxt(false);
                            setDisplayQuestion(true);
                        }}
                        style={{ marginTop: "2%"}}
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
                        question={question}
                        handler={setSelectedOption}
                    />
                    <button
                        className="nextQuestionBtn"
                        tabIndex = {0}
                        onClick={async () => {
                            if (selectedOption.opt === undefined) {
                                alert("Opa! Selecione uma alternativa para continuar")
                            } else if (selectedOption.justifs.length !== 0){
                                console.log(selectedOption)
                                setDisplayJustifs(true);
                                setDisplayQuestion(false);
                                await setAnswers({ ...Answers, [question.id]: selectedOption.txt });
                            } else {
                                await setAnswers({ ...Answers, [question.id]: selectedOption.txt });
                                nextQuestion();
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

                    {Answers[question.id] === undefined ?
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
                                    await setJustifications({ ...justifications, [question.id]: selectedJustification });
                                    nextQuestion();
                                    setSelectedOption({})
                                    await setSelectedJustification("")
                                    //this callback needs to be async, 
                                    //because writing to localStorage takes longer than displaying info in "finsishedFirstSetQuestions" state
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

            {displayExplanation === "firstSet" ?
                <div className="outer-question-div">
                    <FirstExplanation answers={Answers} justifications={justifications} correctAnswers = {QuestionsData.firstSetCorrectAnswers} />
                    <button
                        className="nextQuestionBtn"
                        tabIndex = {0}
                        onClick={() => {
                            setQuestion(QuestionsData.secondSetofQuestions[0]);
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

            {displayExplanation === "secondSet" ?
                <div className="outer-question-div">
                    <SecondExplanation answers = {Answers} justifications={justifications} correctAnswers = {QuestionsData.secondSetCorrectAnswers} />
                    <button
                        className = "nextQuestionBtn"
                        tabIndex = {0}
                        onClick = {() => {
                            setFinsishedSecondSetQuestions(true); 
                            setDisplayExplanation("x");
                        }}
                    >
                        Clique aqui para continuar
                    </button>
                </div>
                :
                null
            }

            {finishedSecondSetQuestions ?      
                <div className = "outer-question-div">
                    <DraggableQuestions data = {DraggableQuestionsData} progressAfter = {progressAfter} />             
                </div>
                :
                null
            }

            </main>
        </>
    )
}
export default CourseTemplate