import React, { createContext, useState } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);

    const setPlayersArray = (array) => {
        setPlayers(array);
    }

    return (
        <AppContext.Provider value={{ players, setPlayersArray }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;