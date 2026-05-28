import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<Header />);
    
    expect(screen.getByText('F')).toBeDefined();
    expect(screen.getByText('Log in')).toBeDefined();
    expect(screen.getByText('Sign up')).toBeDefined();
    
    const navLinks = ['Product', 'Teams', 'Resources', 'Community', 'Support', 'Enterprise', 'Pricing'];
    navLinks.forEach(link => {
      expect(screen.getByText(link)).toBeDefined();
    });
  });
});
