import { render } from '@testing-library/react';
import { ViewPort } from './ViewPort';

describe('ViewPort', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ViewPort />);
    expect(baseElement).toBeTruthy();
  });
});
