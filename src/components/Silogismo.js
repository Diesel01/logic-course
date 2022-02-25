import React from "react"; 
import IntroSyl from "./Syllogism/IntroSyl";
import FirstExp from "./Syllogism/FirstExp";
import SecondExp from "./Syllogism/SecondExp";
import questions from "./Syllogism/QuestionData"
import SylDraggableQuestionsData from "./Syllogism/SylDraggableQuestionsData";
import CourseTemplate from './CourseTemplate'; 

const Silogismo = () => {
    return (
        <>
            <CourseTemplate 
                Intro = {IntroSyl}
                FirstExplanation = {FirstExp}
                SecondExplanation = {SecondExp}
                QuestionsData = {questions}
                DraggableQuestionsData = {SylDraggableQuestionsData}
                progressAfter = 'logicaProposicional'
            />       
        </>
    )

}

export default Silogismo