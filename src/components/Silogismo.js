import React, {useState} from "react"; 


const Silogismo = () => {

    const [question, setQuestion] = useState(q1.question); 

    const [options, setOptions] = useState(q1.options); 

    const [selectedConseq, setSelectedConseq] = useState({})
    
    const updateQuestion = (id) => { 
        setQuestion(id.question); 
        setOptions(id.options); 
    }

    return (
        <form>
            <p>{question}</p>

            {options.map( (option, index) => {
                return (
                    <>
                        <input 
                            type = "radio" 
                            value = {option.conseq} 
                            name = {option.txt} 
                            id = {`option${index}`}
                            onClick = {() => {setSelectedConseq(option.conseq)}}    
                        >
                        </input>

                        <label htmlFor = {`option${index}`}> {option.txt} </label> 
                    </>
                )
            })}

            <button onClick = { () => {updateQuestion(selectedConseq)} }>
                Enviar resposta
            </button>

        </form>
    )

}

export default Silogismo