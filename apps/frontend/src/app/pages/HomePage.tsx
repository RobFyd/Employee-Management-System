import { Header } from '@ems/common-ui'
import { AuthInfo } from '../components/Auth/AuthInfo';
import { AuthContext } from '../components/Auth/AuthContext';

export const HomePage = () => {
    return (
        <div>
            <Header>Home</Header>
            <p>Welcome to the home page!</p>
            <AuthContext.Provider value={{ isLoggedIn: true }}>
                <AuthInfo />
            </AuthContext.Provider>
        </div>
    );
};