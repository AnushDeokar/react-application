import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/QuestionBank"
function EndScreen(){
    const {score, setScore, setGameState}=useContext(QuizContext);
    const restartQuiz=()=>{
        setScore(0);
        setGameState("menu");
    }
    return <div className="endscreen">
        <h1>Quiz Finished</h1>
        <h3>
        <p> Your Score is   {score}/{Questions.length}</p>
        </h3>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
}

export default EndScreen;