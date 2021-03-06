import React, { useState, useContext } from "react";
import './App.css';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import Quiz from './Components/Quiz';
import {QuizContext} from './Helpers/Context';
import { Questions } from "./Helpers/QuestionBank";


function App() {

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [ques, setQues] = useState(1);
  return (
    <div className="App">
      <div className="Heading">



      {gameState=="quiz"?(
            <h1>Question {ques}</h1>):(
              gameState=="endscreen"?(<h1>Thank You!</h1>):(<h1>Get Ready!!!</h1>))
              
        }
      
      </div>
      <QuizContext.Provider value = {{gameState, setGameState, score, setScore, ques, setQues}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
