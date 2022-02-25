import CourseTemplate from "./CourseTemplate"; 
import {IntroTxt, InducExplanation, DeducExplanation} from "./Introduction course/Explanations"
import IntroQuestionsData from "./Introduction course/IntroQuestionsData"
import ExerciseDataIntro from "./Introduction course/ExerciseDataIntro";

const Intro = () =>{
    return(
        <CourseTemplate 
            Intro = {IntroTxt}
            FirstExplanation = {InducExplanation}
            SecondExplanation = {DeducExplanation}
            QuestionsData = {IntroQuestionsData}
            DraggableQuestionsData = {ExerciseDataIntro}
            progressAfter = 'silogismo'
        />
    )
}

export default Intro