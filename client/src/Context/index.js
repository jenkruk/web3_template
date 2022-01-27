import React, { useState } from 'react';
const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    const contextValue = {
        user,
        setUser
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default Context;