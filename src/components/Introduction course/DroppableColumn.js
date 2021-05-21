import React, {useState, useEffect} from 'react';
import {Droppable} from 'react-beautiful-dnd'; 
import DraggableAlternatives from "./DraggableAlternatives";
import "../styles/ExerciseIntro.css";
import '../styles/Intro.css';
import { deductionQuestionsArray } from './QuestionsData';

const DroppableColumn = props => {
    const [displayCorrect, setDisplayCorrect] = useState(false); 
    const [displayFalse, setDisplayFalse] = useState(false); 

    const [showQuestion, setShowQuestion] = useState(false);
    // const [correctEmojiAnswer, setCorrectEmojiAnswer] = useState(undefined); 

    useEffect(() => {
        if(props.correct === undefined){
            return
        } 

        if (props.correct){
            // setDisplayCorrect(true);
            // setDisplayFalse(false); 
            setShowQuestion(true);
        } else {
            // setDisplayFalse(true); 
            // setDisplayCorrect(false);
        }

    }, [props, displayFalse, displayCorrect, showQuestion])

    const checkAnswer = (answer) => {
        if (answer === props.argumentType){
            setDisplayCorrect(true);
            setDisplayFalse(false);
        } else {
            setDisplayCorrect(true);
            setDisplayFalse(false);
        }
    }
    
    return (
        <div className = "outer-draggable-div">
            
            <Droppable droppableId = {props.column.id} >
                {(provided) => (
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
            
            {showQuestion ?
                <div>
                    <p>Esse argumento é uma...</p>
                    <input type = 'radio' name = {`question-${props.column.id}`} id = "deduc" onClick = {()=> {checkAnswer("deduc")}}/>
                    <label name = "dedução" htmlFor = "deduc">Dedução</label>   

                    <input type = 'radio' name = {`question-${props.column.id}`} id = "induc" onClick = {()=> {checkAnswer("induc")}}/>
                    <label name = "indução" htmlFor = "induc">Indução</label>

                    {/* {correctEmojiAnswer ?  <span aria-label = "joinha" role = "img">👍</span> : <span aria-label = "resposta errada" role = "img">👎</span> }                       */}
                </div>
            :
            null
            }

            {displayCorrect ? <span className = "right-txt"> <p className = "question-draggable-txt">Você acertou!</p> </span> : null}
            {displayFalse ? <span className = "wrong-txt"> <p className = "question-draggable-txt">Ainda não...</p>  </span> : null}
        
        </div>
    )
}

export default DroppableColumn