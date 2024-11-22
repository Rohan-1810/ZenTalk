import React, { useState } from 'react'
import "./styles/Quiz.css"
import Navbar1 from './Navbar1';

function Quiz({quizData}) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
    const [responses, setResponses] = useState(Array(quizData.length).fill(null));
    const [showResults, setShowResults] = useState(false); 
    const [totalScore, setTotalScore] = useState(0);

    const handleNext = () => {
         if (currentQuestionIndex < quizData.length - 1) 
        { setCurrentQuestionIndex(currentQuestionIndex + 1); } 
         else {
            calculateTotalScore(); setShowResults(true); }};

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
             setCurrentQuestionIndex(currentQuestionIndex - 1); 
        }};

    const handleOptionChange = (e) => { 
        const newResponses = [...responses];
        newResponses[currentQuestionIndex] = parseInt(e.target.value); 
        setResponses(newResponses);};
        const calculateTotalScore = () =>
            { const score = responses.reduce((acc, response, index) =>
                { if (response !== null) 
                { return acc + quizData[index].points[response]; } 
                return acc;
                }, 0);
                setTotalScore(score); }; 
                
                const getSuggestions = (score) => {
                     if (score <= 18) {
                        return "Your responses suggest that you are currently experiencing mild symptoms of mental health issues. It's important to take care of your mental health by practicing self-care and reaching out for support if needed."; }
                         
                        else if (score <= 30) 
                            { return "Your responses indicate moderate symptoms of mental health issues. It might be helpful to seek support from a counselor to discuss your feelings and explore coping strategies."; } 
                        else if (score <= 42) { 
                            return "Your responses suggest significant symptoms that might be impacting your daily life. It's strongly recommended to seek professional help as soon as possible to address these issues."; }
                        else { 
                            return "Your responses indicate very severe symptoms that are likely affecting your overall well-being. Immediate professional intervention is recommended to provide you with the support you need."; }
                };
    const currentQuestion = quizData[currentQuestionIndex];
    return (
        <div >
            
            {showResults ? ( <div className='tscore'> <h2 >Your Total Score: {totalScore}</h2> 
            <p className='sugg'>{getSuggestions(totalScore)}</p> </div> ):(<div>
            <p className='ques'>
            Q{currentQuestionIndex + 1}. {currentQuestion.questionText}
            </p>
             <ul> {currentQuestion.options.map((option, idx) => 
                ( <li key={idx}> 
                <input type="radio" 
                id={`q${currentQuestionIndex}o${idx}`} 
                name={`q${currentQuestionIndex}`}
                value={idx}
                checked={responses[currentQuestionIndex] === idx} 
                onChange={handleOptionChange} />
                 <label htmlFor={`q${currentQuestionIndex}o${idx}`}>
                <div className='option'>
                {option}
            </div></label> </li> ))}</ul>
           
            <div className='btns'> <button className="prev" onClick={handlePrev} disabled={currentQuestionIndex === 0}>Prev</button> 
            <button className="prev" onClick={handleNext}>{currentQuestionIndex === quizData.length - 1 ? "Submit" :"Next"}</button> </div></div>)}
        </div>
    )
}

export default Quiz
