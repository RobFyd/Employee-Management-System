// createContext() is a function that creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
// useContext() is a hook that accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    setIsLogged: () => null,
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLogged] = useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLogged }}>
            {children}
        </AuthContext.Provider>
    )
}
