import React from "react"; 
import '../styles/Intro.css';

const Question = ({ question, handler }) => {

    const handleClick = event => {
        const value = event.target.value;

        let selectedOption;

        for (let i = 0; i < question.options.length; i++) {
            let option = question.options[i];
            if (option.opt === value) {
                selectedOption = option;
                break
            }
        }

        handler(selectedOption);
    };

    return (
        <div id="question" className="inner-question-div">

            {question.txt.map((text, index) => {
                return (
                    <p
                        key={question.id + "-" + index}
                        className="question-txt"
                    >
                        {text}
                    </p>
                )
            })}


            {question.options.map((option, index) => {
                return (
                    <div className="option-div">
                        <input
                            name={question.id}
                            id={option.opt + "-" + index}
                            key={option.opt + "-" + index}
                            value={option.opt}
                            onClick={handleClick}
                            type="radio"
                        />

                        <label
                            className="option-label"
                            htmlFor={option.opt + "-" + index}
                            name={question.id}
                        >
                            {option.txt}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default Question