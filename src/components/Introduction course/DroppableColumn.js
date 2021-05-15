import React, {useState, useEffect} from 'react';
import {Droppable} from 'react-beautiful-dnd'; 
import DraggableAlternatives from "./DraggableAlternatives"

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
        <div>
            <p> <b> {props.column.title} </b> </p>
            
            <Droppable droppableId = {props.column.id} >
            
                {(provided) => (
                    <div
                        ref = {provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {props.tasks.map((task, index) => ( 
                            <DraggableAlternatives key = {task.id} task = {task} index = {index} />
                        ))}

                        {displayCorrect ? <p>You're right!</p> : null}

                        {displayFalse ? <p>Not yet...</p> : null}
                        
                        {provided.placeholder}
                    </div>
                )}
                
            </Droppable>
        </div>
    )
}

export default DroppableColumn