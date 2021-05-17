import React, { useEffect, useState } from 'react';
import initialData from "./ExerciseDataIntro"; 
import {DragDropContext} from 'react-beautiful-dnd'; 
import DroppableColumn from './DroppableColumn';
import "../styles/ExerciseIntro.css";

const DraggableQuestions = () => {
    const [state, setState] = useState(initialData); 
    const [finished, setFinished] = useState(false)

    const isArrayEqual = (a, b) => {
        return Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
    }

    const dragEndHandler = async result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        const column = state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newCorrectValue = isArrayEqual(column.correctAnswers, newTaskIds);

        const newColumn = {
            ...column,
            taskIds: newTaskIds,
            correct: newCorrectValue
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn,
            },
        };

        setState(newState);
    }

    useEffect(() => {
        console.log(state.columns); 

        let finishedExercises = []; 

        for (let column in state.columns){
            state.columns[column].correct ? finishedExercises.push(column) : setFinished(false); 
        }

        finishedExercises.length === Object.keys(state.columns).length ? setFinished(true) : setFinished(false)

    }, [state.columns])

    return (
        <>
            <h1 className = "intro-txt-title"> Vamos exercitar um pouco o que você aprendeu.</h1>

            <h2 className = "question-draggable-h2">Arraste as proposições em ordem para formar argumentos:</h2>

            {finished ? <p className = "finished-draggable-txt">Parabéns, vc terminou! <span aria-label="festinha" role="img">🎉</span></p> : null}

            <DragDropContext onDragEnd = {dragEndHandler}> 
            
                {state.columnOrder.map(columnId => {
                    const column = state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

                    return <DroppableColumn key={column.id} column={column} tasks={tasks} correct={column.correct}/>
                })}
                                
            </DragDropContext>

        </>
    )
}

export default DraggableQuestions