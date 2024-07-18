import { render } from '@testing-library/react';
import { AuthCredentials } from './AuthCredentials';

describe('AuthCredentials component', () => {
    it('should toggle value', () => {
        render(<AuthCredentials />);
    });
});