import React, {useState} from 'react';
import {Draggable} from 'react-beautiful-dnd'; 

const DraggableAlternatives = props => {
     
    return (
        <Draggable draggableId = {props.task.id} index = {props.index}>
            { provided => (
                <span 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref = {provided.innerRef} 
                    className = "list-item-draggable"
                >
                    <p>                         
                        {props.task.content} ; {props.task.id}
                    </p>
                </span>
            )}    
        </Draggable>
    )
}

export default DraggableAlternatives