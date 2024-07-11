import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
    it.skip('should render correctly', () => {  // it = test
        const { debug } = render(<Button label="Submit" />);
        debug();
    });
    // it.todo('should display dialog');
    // it('should hide popup', () => {
    //     expect(1).toBe(1);
    // });
});              