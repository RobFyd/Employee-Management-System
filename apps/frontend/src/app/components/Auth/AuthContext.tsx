// createContext() is a function that creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
// useContext() is a hook that accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

import { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
    toggle: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

// custom hook
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context) {
        return context;
    }
    throw new Error('Oh no! Component should be wrapped in AuthContextProvider');
}

// custom hook
const useAuth = () => {
    const [isLoggedIn, setIsLogged] = useState(false);

    const login = () => setIsLogged(true);
    const logout = () => setIsLogged(false);
    const toggle = () => setIsLogged((value) => !value);

    return { isLoggedIn, login, logout, toggle };
}

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <AuthContext.Provider value={useAuth()}>
            {children}
        </AuthContext.Provider>
    )
}
  // react context hook pattern