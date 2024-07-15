import { Header } from '@ems/common-ui'
import { AuthInfo } from '../components/Auth/AuthInfo';
import { AuthContext } from '../components/Auth/AuthContext';
import { useState } from 'react';

export const HomePage = () => {
    const [isLoggedIn, setIsLogged] = useState(true);
    return (
        <div>
            <Header>Home</Header>
            <p>Welcome to the home page!</p>
            <AuthContext.Provider value={{ isLoggedIn, setIsLogged }}>
                <AuthInfo />
            </AuthContext.Provider>
        </div>
    );
};