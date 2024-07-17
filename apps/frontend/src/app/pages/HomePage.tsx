import { Header } from '@ems/common-ui'
import { AuthInfo } from '../components/Auth/AuthInfo';
import { AuthContextProvider } from '../components/Auth/AuthContext';

export const HomePage = () => {
    return (
        <div>
            <Header>Home</Header>
            <p>Welcome to the home page!</p>
            <AuthContextProvider>
                <AuthInfo />
            </AuthContextProvider>

            {/* <AuthInfo /> */}
        </div>
    );
};