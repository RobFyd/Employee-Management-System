import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthCredentials } from './AuthCredentials';
import { AuthContextProvider } from './AuthContext';

describe('AuthCredentials component', () => {
    it('should toggle value', async () => {
        const { debug } = render(
            <AuthContextProvider>
                <AuthCredentials />
            </AuthContextProvider>
        );
        expect(screen.getByText(/no/i)).toBeInTheDocument();
        // expect(screen.getByText('NO', {exact: false})).toBeInTheDocument();
        await userEvent.click(screen.getByRole('button'));
        // fireEvent.click(screen.getByRole('button'));
        expect(screen.getByText(/yes/i)).toBeInTheDocument();
        debug();
    });
});
