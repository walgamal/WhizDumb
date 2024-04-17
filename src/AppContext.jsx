import React, { createContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    const [categories, setCategories] = useState([]);

    const [question, setQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [allAnswers, setAllAnswers] = useState([]);

    const setPlayersArray = (array) => {
        setPlayers(array);
    }

    const setCategoriesArray = (array) => {
        setCategories(array);
    }

    const setQuestionString = (string) => {
        setQuestion(string);
    }

    const setCorrectAnswerString = (string) => {
        setCorrectAnswer(string);
    }

    const setAllAnswersArray = (array) => {
        setAllAnswers(array);
    }

    return (
        <AppContext.Provider value={{ players, setPlayersArray, 
                                      categories, setCategoriesArray, 
                                      question, setQuestionString, 
                                      correctAnswer, setCorrectAnswerString,
                                      allAnswers, setAllAnswersArray  }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;