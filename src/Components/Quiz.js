import React,{useState, useContext} from "react";
import {Questions} from "../Helpers/QuestionBank";
import {QuizContext} from "../Helpers/Context";



function Quiz(){
    const [currQues, setCurrQues] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const {score, setScore, gameState, setGameState, ques, setQues} = useContext(QuizContext);
    
    const nextQuestion = ()=>{
        if (Questions[currQues].answer == optionChosen){
            setScore(score+1);
        }
        setQues(ques+1);
        setCurrQues(currQues+1);
    };
    const finishQuiz = ()=>{
        if (Questions[currQues].answer == optionChosen){
            setScore(score+1);
        }
        setQues(1);
        setGameState("endscreen");
    }

    return <div className="Quiz">
        <h1>{Questions[currQues].prompt}</h1>
        <div className="options">
            <button onClick={()=>setOptionChosen("A")}>{Questions[currQues].optionA}</button>
            <button onClick={()=>setOptionChosen("B")}>{Questions[currQues].optionB}</button>
            <button onClick={()=>setOptionChosen("C")}>{Questions[currQues].optionC}</button>
            <button onClick={()=>setOptionChosen("D")}>{Questions[currQues].optionD}</button>
        </div>
        {currQues == Questions.length -1?(
            <button className="endbut" onClick={finishQuiz}>Finish Quiz</button>):(
        <button className="endbut" onClick={nextQuestion}>Next</button>
        )}
        </div>
}

export default Quiz;