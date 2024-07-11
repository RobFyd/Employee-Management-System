import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Button } from './Button';

describe('Button component', () => {
    it('should render correctly', () => {  // it = test
        const { debug, container } = render(<Button label="Submit!" />);
        // debug();
        console.log(container);
        expect(screen.getByText('Submit', { exact: false })).toBeInTheDocument();
    });
    // it.todo('should display dialog');
    // it('should hide popup', () => {
    //     expect(1).toBe(1);
    // });
});

// npx nx test common-ui --testFile=Button