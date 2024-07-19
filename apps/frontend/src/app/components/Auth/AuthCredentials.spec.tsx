import { render, screen, fireEvent } from '@testing-library/react';
import { AuthCredentials } from './AuthCredentials';
import { AuthContextProvider } from './AuthContext';

describe('AuthCredentials component', () => {
    it('should toggle value', () => {
        const { debug } = render(
            <AuthContextProvider>
                <AuthCredentials />
            </AuthContextProvider>
        );
        expect(screen.getByText(/no/i)).toBeInTheDocument();
        // expect(screen.getByText('NO', {exact: false})).toBeInTheDocument();
        fireEvent.click(screen.get);
        debug();
    });
});

// 4 min