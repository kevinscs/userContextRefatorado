import { createContext, useState } from "react";
import { globalState } from './data.js';

export const GlobalContexte = createContext();

// eslint-disable-next-line
export const AppContext = ({children}) => {
    const [ state, setState ] = useState(globalState);

    return (
        <GlobalContexte.Provider value={{ state, setState }}>
            {children}
        </GlobalContexte.Provider>
    );
};
