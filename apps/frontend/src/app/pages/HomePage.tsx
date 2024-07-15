import { Header } from '@ems/common-ui'
import { AuthInfo } from '../components/Auth/AuthInfo';

export const HomePage = () => {
    return (
        <div>
            <Header>Home</Header>
            <p>Welcome to the home page!</p>
            <AuthInfo />
        </div>
    );
};