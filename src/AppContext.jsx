import React, { createContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    const [categories, setCategories] = useState([]);

    const setPlayersArray = (array) => {
        setPlayers(array);
    }

    const setCategoriesArray = (array) => {
        setCategories(array);
    }

    return (
        <AppContext.Provider value={{ players, setPlayersArray, categories, setCategoriesArray }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;