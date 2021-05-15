import React, {useState} from 'react';
import {Draggable} from 'react-beautiful-dnd'; 

const DraggableAlternatives = props => {
     
    return (
        <Draggable draggableId = {props.task.id} index = {props.index}>
            { provided => (
                <p 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref = {provided.innerRef}
                > 
                    {props.task.content} ; {props.task.id}
                </p>
            )}    
        </Draggable>
    )
}

export default DraggableAlternatives