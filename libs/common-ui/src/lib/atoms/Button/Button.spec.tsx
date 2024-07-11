import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
    it('should render correctly', () => {  // it = test
        const { debug } = render(<Button label="Submit" />);
        debug();
        expect(screen.getByText('Submit')).toBeInTheDocument();
    });
    // it.todo('should display dialog');
    // it('should hide popup', () => {
    //     expect(1).toBe(1);
    // });
});              

// npx nx test common-ui --testFile=Button