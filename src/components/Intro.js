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
    const [selectedOption, setSelectedOption] = useState({}) 

    const [displayJustifs, setDisplayJustifs] = useState(false)

    const [justifications, setJustifications] = useState({})
    const [selectedJustification, setSelectedJustification] = useState({})

    const [finished, setFinished] = useState(false)

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
                questionsArray[i+1] === undefined ? setFinished(true) : setInductionQ(questionsArray[i+1]);   
            }
        }
    }

    return ( 
        <>
            {finished ? 
                <p>Nerd, lul</p>            
                :
                <div>
                    <Question 
                        question = {inductionQ}
                        handler = {setSelectedOption}
                    />
                    <button
                        onClick = {() => {
                            setDisplayJustifs(true); 
                            setInducAnswers( { ...inducAnswers, [inductionQ.id]: selectedOption.txt} ); 
                            nextQuestion()
                            console.log(selectedOption)
                        }}
                    >
                        Enviar resposta
                    </button>
                </div>
            }

            {displayJustifs ? 
                <div>
                    <Justification 
                        option = {selectedOption}
                        handler = {setSelectedJustification}
                    />
                    <button
                        onClick = {
                            setJustifications( {...justifications, [inductionQ.id]: selectedJustification } )
                        } 
                    >
                        Enviar justificação
                    </button>
                </div>
                :
                null
            }
        </>
    )
}
export default Intro



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
        <div>
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



const Justification = ( {option, handler} ) => { 
    
    const handleClick = event => {
        const value  = event.target.value;
        handler(value);
    }; 

    const justifications = option.justifs
    return (
       <div>
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