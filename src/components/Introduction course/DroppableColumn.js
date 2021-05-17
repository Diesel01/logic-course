import React, {useState, useEffect} from 'react';
import {Droppable} from 'react-beautiful-dnd'; 
import DraggableAlternatives from "./DraggableAlternatives";
import "../styles/ExerciseIntro.css";

const DroppableColumn = props => {
    const [displayCorrect, setDisplayCorrect] = useState(false); 
    const [displayFalse, setDisplayFalse] = useState(false); 

    useEffect(() => {
        if(props.correct === undefined){
            return
        } 

        if (props.correct){
            setDisplayCorrect(true);
            setDisplayFalse(false)
        } else {
            setDisplayFalse(true); 
            setDisplayCorrect(false);
        }

    }, [props, displayFalse, displayCorrect])
    
    return (
        <div className = "outer-draggable-div">

            {/* <p className = "question-draggable-txt"> <b> {props.column.title} </b> </p> */}
            
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

            {displayCorrect ? <span className = "right-txt"> <p className = "question-draggable-txt">Você acertou!</p> </span> : null}
            {displayFalse ? <span className = "wrong-txt"> <p className = "question-draggable-txt">Ainda não...</p>  </span> : null}

        </div>
    )
}

export default DroppableColumn