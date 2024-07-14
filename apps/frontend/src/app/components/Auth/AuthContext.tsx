// createContext() is a function that creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
// useContext() is a hook that accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

import { createContext } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({ isLoggedIn: false });