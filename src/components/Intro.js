import React, {useEffect, useState} from 'react'; 

const questionsArray = [
    {
        id: "induc0", 
        txt: "Ao abrir uma torneira, o que provavelmente vai sair depois?", 
        options: [
            { opt: "induc0_opt0", txt: "Sair água", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }, 
            { opt: "induc0_opt1", txt: "Sair sangue",  justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc0_opt2", txt: "Não sair água", justifs: ["Pq sim", "Pq eu quis", "Whatever"] } 
        ], 
    }, 

    {
        id: "induc1",
        txt: "Você vê uma pessoa carregando uma caixa de madeira escrito: maçãs. O que possivelmente há dentro dela?",
        options: [
            { opt: "induc1_opt0", txt: "Maçãs", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }, 
            { opt: "induc1_opt1", txt: "Bananas",  justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc1_opt2", txt: "Uma galinha", justifs: ["Pq sim", "Pq eu quis", "Whatever"] } 
        ]
    }, 

    {
        id: "induc2", 
        txt: "No outro lado da rua você vê um homem vestido de bombeiro. Qual é possivelmente a ocupação dele?", 
        options: [
            { opt: "induc2_opt0", txt: "Bombeiro", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }, 
            { opt: "induc2_opt1", txt: "Gerente",  justifs: ["Pq sim", "Pq eu quis", "Whatever"] },
            { opt: "induc2_opt2", txt: "Estudante", justifs: ["Pq sim", "Pq eu quis", "Whatever"] }, 
            { opt: "induc2_opt3", txt: "Desempregado", justifs: ["Pq sim", "Pq eu quis", "Whatever"] } 
        ]
    }
]

const Intro = () => { 
    const [inductionQ, setInductionQ] = useState(questionsArray[0]); // object with text, altennatives, justifications and id props. 

    const [inducAnswers, setInducAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState({}); 

    const [justifications, setJustifications] = useState({});
    const [selectedJustification, setSelectedJustification] = useState({});

    const [displayQuestion, setDisplayQuestion] = useState(true);
    const [displayJustifs, setDisplayJustifs] = useState(false);
    const [finished, setFinished] = useState(false);

    const storage = window.localStorage; 

    useEffect( () => {
        let stringInducAnswers = JSON.stringify(inducAnswers)
        storage.setItem( "inductionAnswers", stringInducAnswers)
        //eslint-disable-next-line
    }, [inducAnswers])

    useEffect( () => {
        let stringfiedObj = JSON.stringify(justifications);
        storage.setItem("inductionJustifications", stringfiedObj); 
        // eslint-disable-next-line
    }, [justifications]); 

   const nextQuestion = () => {
        for (let i = 0; i < questionsArray.length; i++){                        
            if (questionsArray[i].id === inductionQ.id){ 
                if (questionsArray[i+1] === undefined){
                    setFinished(true); 
                    setDisplayQuestion(false)
                } else {
                    setInductionQ(questionsArray[i+1]); 
                    setDisplayQuestion(true)
                }
            }
        }
    }

    return ( 
        <>
            {displayQuestion ? 
                <div>
                    <Question 
                        question = {inductionQ}
                        handler = {setSelectedOption}
                    />
                    <button
                        onClick = {() => {
                            setDisplayJustifs(true); 
                            setDisplayQuestion(false)
                            setInducAnswers( { ...inducAnswers, [inductionQ.id]: selectedOption.txt} ); 
                        }}
                    >
                        Enviar resposta
                    </button>
                </div>
                :
                null
            }

            {displayJustifs ? 
                <div>
                    <Justification 
                        option = {selectedOption}
                        handler = {setSelectedJustification}
                    />
                    <button
                        onClick = { () => {
                            setDisplayJustifs(false); 
                            setJustifications( {...justifications, [inductionQ.id]: selectedJustification } );
                            nextQuestion(); 
                        }} 
                    >
                        Enviar justificação
                    </button>
                </div>
                :
                null
            }

            {finished ? 
                <p>Vc terminou!</p>
                :
                null
            }
        </>
    )
}
export default Intro

//////// Question component
const Question = ( {question, handler} ) => {

    const handleClick = event => {
        const value  = event.target.value;

        let selectedOption; 

        for (let i = 0; i < question.options.length; i++){
            let option = question.options[i]; 
            if (option.opt === value){
                selectedOption = option; 
                break
            }
        }

        handler(selectedOption);
    };
    
    return (
        <div id = "question">
            <p>{question.txt}</p>

            {question.options.map( (option, index) => {
                return (
                    <div>
                        <input
                            name = {question.id} 
                            id = {option.opt + "-" + index}
                            key = {option.opt + "-" + index}
                            value = {option.opt}
                            onClick = {handleClick}
                            type = "radio"
                        />

                        <label htmlFor = {option.opt + "-" + index} name = {question.id}>
                            {option.txt}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

//////// Justification component
const Justification = ( {option, handler} ) => { 
    
    const handleClick = event => {
        const value  = event.target.value;
        handler(value);
    }; 

    const justifications = option.justifs
    return (
       <div>
            <p>Por que você selecionou "{option.txt}"?</p>

            {justifications.map( (justif, index) => {
                return (
                    <div>  
                        <input
                            onClick = {handleClick}
                            type = 'radio'
                            name = {option.opt} 
                            id = {option.opt + "-" + index}
                            key = {option.opt + "-" + index}
                            value = {justif}
                        />
                        <label htmlFor = {option.opt + "-" + index}>
                            {justif} 
                        </label>
                    </div>  
                )
            })}
       </div>
    )
}