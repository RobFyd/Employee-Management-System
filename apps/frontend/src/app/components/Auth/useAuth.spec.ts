import { renderHook } from '@testing-library/react';

import { useAuth } from './AuthContext';

describe('useAuth hook', () => {
  it('should toggle value', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.isLoggedIn).toEqual(false);

    result.current.toggle();
    expect(result.current.isLoggedIn).toEqual(true);
  });
});
