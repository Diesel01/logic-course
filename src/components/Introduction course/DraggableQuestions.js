import React, { useEffect, useState } from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'; 

const DraggableQuestions = () => {
    const [state, setState] = useState({ 
        columns: {
                
            }
        })

    const dragEndHandler = result => {
    //     const { destination, source, draggableId } = result;

    //     if (!destination) {
    //         return
    //     }

    //     if (destination.droppableId === source.droppableId && destination.index === source.index) {
    //         return
    //     }

    //     const column = state.columns[source.droppableId];
    //     const newTaskIds = Array.from(column.taskIds);
    //     newTaskIds.splice(source.index, 1);
    //     newTaskIds.splice(destination.index, 0, draggableId);

    //     const newColumn = {
    //         ...column,
    //         taskIds: newTaskIds,
    //     };

    //     const newState = {
    //         ...state,
    //         columns: {
    //             ...state.columns,
    //             [newColumn.id]: newColumn,
    //         },
    //     };

    //     setState(newState);
        console.log(result)
    }

    return (
        <DragDropContext
            onDragEnd = {dragEndHandler}
        > 
            <Droppable
                style = {{
                    margin: "8px",
                    border: "1px solid lightgrey",
                    borderRadius: "2px"
                }}
                droppableId = "drop1"
            >
                {(provided) => (
                    <div 
                        ref = {provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <Draggable draggableId = "a1" index = {0}>
                            { provided => (
                                <p 
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref = {provided.innerRef}
                                > X
                                </p>
                            )}    
                        </Draggable>

                         <Draggable draggableId = "a2" index = {1}>
                            { provided => (
                                <p 
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref = {provided.innerRef}
                                > y
                                </p>
                            )}    
                        </Draggable>    

                         <Draggable draggableId = "a3" index = {2}>
                            { provided => (
                                <p 
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref = {provided.innerRef}
                                > z
                                </p>
                            )}    
                        </Draggable>                   
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        
        </DragDropContext>
    )
}

export default DraggableQuestions