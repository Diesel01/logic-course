import React from "react"; 
import '../styles/Intro.css';

const Justification = ({ option, handler }) => {

    const handleClick = event => {
        const value = event.target.value;
        handler(value);
    };

    const justifications = option.justifs;
    return (
        <>
            <div id="justification" className="inner-question-div">
                <p className="question-txt"> Por que você selecionou "{option.txt}"? </p>

                {justifications.map((justif, index) => {
                    return (
                        <div className="option-div">
                            <input
                                onClick={handleClick}
                                type='radio'
                                name={option.opt}
                                id={option.opt + "-" + index}
                                key={option.opt + "-" + index}
                                value={justif}
                            />
                            <label 
                                className="option-label"
                                htmlFor={option.opt + "-" + index}
                                name = {option.opt}
                            >
                                {justif}
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Justification