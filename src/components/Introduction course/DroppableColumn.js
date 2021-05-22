import React, {useState, useEffect} from 'react';
import {Droppable} from 'react-beautiful-dnd'; 
import DraggableAlternatives from "./DraggableAlternatives";
import "../styles/ExerciseIntro.css";
import '../styles/Intro.css';

const DroppableColumn = props => {
    const [displayCorrect, setDisplayCorrect] = useState(undefined); 

    const [showQuestion, setShowQuestion] = useState(false);
    const [correctEmojiAnswer, setCorrectEmojiAnswer] = useState(undefined); 

    useEffect(() => {
        if(props.correct === undefined){
            return
        }
        if (props.correct){
            setDisplayCorrect(true);
            setShowQuestion(true);
        } else {
            setDisplayCorrect(false);
        }
    }, [props, displayCorrect, showQuestion])

    const checkAnswer = (answer) => {
        if (answer === props.argumentType){
            setCorrectEmojiAnswer(true);
        } else {
            setCorrectEmojiAnswer(false)            
        }
    }
    
    return (
        <div className = "outer-draggable-div">
            
            <Droppable droppableId = {props.column.id} >
                { provided => (
                    <div
                        ref = {provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.tasks.map((task, index) => ( 
                            <DraggableAlternatives key = {task.id} task = {task} index = {index} />
                        ))}
                        
                        {provided.placeholder}
                    </div>
                )} 
           </Droppable>
            
            {displayCorrect && displayCorrect !== undefined ? <span className = "right-txt"><p className = "question-draggable-txt">Você acertou!</p></span> : null}

            {!displayCorrect && displayCorrect !== undefined ? <span className = "wrong-txt"><p className = "question-draggable-txt">Ainda não...</p></span> : null}
        
            {showQuestion ?
                <div>
                    <p>Esse argumento é uma...</p>
                    <input type = 'radio' name = {`question-${props.column.id}`} id = "deduc" onClick = {()=> {checkAnswer("deduc")}}/>
                    <label name = "dedução" htmlFor = "deduc">Dedução</label>   

                    <input type = 'radio' name = {`question-${props.column.id}`} id = "induc" onClick = {()=> {checkAnswer("induc")}}/>
                    <label name = "indução" htmlFor = "induc">Indução</label>

                    {correctEmojiAnswer && correctEmojiAnswer !== undefined ? <span aria-label = "resposta certa" role = "img">👍</span> : null}
                    {!correctEmojiAnswer && correctEmojiAnswer !== undefined? <span aria-label = "resposta errada" role = "img">👎</span> : null}                      
                </div>
            :
            null
            }


        
        </div>
    )
}

export default DroppableColumn