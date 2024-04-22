import React, { createContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [scores, setScores] = useState([0,0,0,0,0,0]);
    const [categories, setCategories] = useState([]);

    const [question, setQuestion] = useState("");
    const [questionCategory, setQuestionCategory] = useState("");
    const [questionsAnswered, setQuestionsAnswered] = useState([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [allAnswers, setAllAnswers] = useState([]);

    const setPlayersArray = (array) => {
        setPlayers(array);
    }

    const setCurrentPlayerNumber = (number) => {
        console.log("Player is now: ", players[number]);
        setCurrentPlayer(number);
    }

    const setCurrentPlayerToActivePlayer = (number, isBeginning) => {
        var nextPlayer = number;
        
        if (!isBeginning) {
            nextPlayer = (nextPlayer + 1) % players.length;
            while (players[nextPlayer] === '') {
                nextPlayer = (nextPlayer + 1) % players.length;
            }
        }
        else {
            nextPlayer = number;
            while (players[nextPlayer] === '') {
                nextPlayer = (nextPlayer + 1) % players.length;
            }
        }

        setCurrentPlayerNumber(nextPlayer);
    }

    const setScoresArray = (array) => {
        setScores(array);
    }

    const setCategoriesArray = (array) => {
        setCategories(array);
    }

    const setQuestionString = (string) => {
        setQuestion(string);
    }
    
    const setQuestionCategoryString = (string) => {
        setQuestionCategory(string);
    }

    const setQuestionsAnsweredArray = (array) => {   
        setQuestionsAnswered(array);
    } 

    const setCorrectAnswerString = (string) => {
        setCorrectAnswer(string);
    }

    const setAllAnswersArray = (array) => {
        setAllAnswers(array);
    }

    return (
        <AppContext.Provider value={{ players, setPlayersArray, 
                                      currentPlayer, setCurrentPlayerNumber, setCurrentPlayerToActivePlayer,
                                      scores, setScoresArray,
                                      categories, setCategoriesArray, 
                                      question, setQuestionString, 
                                      questionCategory, setQuestionCategoryString, 
                                      questionsAnswered, setQuestionsAnsweredArray,
                                      correctAnswer, setCorrectAnswerString,
                                      allAnswers, setAllAnswersArray  }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;