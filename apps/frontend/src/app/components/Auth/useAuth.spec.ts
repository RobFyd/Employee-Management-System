import { renderHook } from '@testing-library/react';

import { useAuth } from './AuthContext';

describe('useAuth hook', () => {
  it('should toggle value', () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current).toEqual(false);
  });
});
