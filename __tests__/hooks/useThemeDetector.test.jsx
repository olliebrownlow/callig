import { renderHook } from '@testing-library/react';
import useThemeDetector from '../../src/hooks/useThemeDetector';

describe('useThemeDetector', () => {
  beforeEach(() => { 
    window.matchMedia = jest.fn(() => { 
      return { 
        matches: false, 
        addListener: jest.fn(), 
        removeListener: jest.fn() 
      } 
    });
  })

  it('should detect if dark theme is not in use', () => {
    const { result } = renderHook(useThemeDetector);
    expect(result.current).toBe(false);
  });
});

describe('useThemeDetector', () => {
  beforeEach(() => { 
    window.matchMedia = jest.fn(() => { 
      return { 
        matches: true, 
        addListener: jest.fn(), 
        removeListener: jest.fn() 
      } 
    });
  })

  it('should detect if dark theme is in use', () => {
    const { result } = renderHook(useThemeDetector);
    expect(result.current).toBe(true);
  });
});
