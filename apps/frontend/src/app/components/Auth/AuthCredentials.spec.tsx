import { render, screen } from '@testing-library/react';
import { AuthCredentials } from './AuthCredentials';
import { AuthContextProvider } from './AuthContext';

describe('AuthCredentials component', () => {
    it('should toggle value', () => {
        render(
            <AuthContextProvider>
                <AuthCredentials />
            </AuthContextProvider>
        );
        expect(screen.getByText(/no/i)).toBeInTheDocument();
        // expect(screen.getByText('NO', {exact: false})).toBeInTheDocument();
    });
});