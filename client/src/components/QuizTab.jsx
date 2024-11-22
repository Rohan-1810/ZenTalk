import React from 'react'
import Quiz from './Quiz';

function QuizTab() {
    const mentalHealthQuiz = [
        {
            questionText: "In the past two weeks, how often have you felt sad or down?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Have you experienced feelings of hopelessness recently?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Do you often have trouble falling asleep?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Do you wake up feeling rested?",
            options: ["Always", "Often", "Sometimes", "Rarely", "Never"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Do you find yourself feeling sleepy during the day?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "How often do you feel fatigued or low on energy?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Do you find it difficult to get motivated to start your day?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Do you feel physically exhausted even without much activity?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Have you noticed changes in your appetite?",
            options: ["No change", "Decreased appetite", "Increased appetite"],
            points: [0, 2, 2]
        },
        {
            questionText: "Do you find it hard to enjoy activities you once loved?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Do you find it difficult to socialize with others?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "How often do you feel overwhelmed by your responsibilities?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        },
        {
            questionText: "Do you find it difficult to remember things?",
            options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
            points: [0, 1, 2, 3, 4]
        }
    ];
    
    return (
        <div className='quiz'>
            <h3 className='menty'>Menty Quiz</h3>
            <Quiz quizData={mentalHealthQuiz}/>
        </div>
    )
}

export default QuizTab
