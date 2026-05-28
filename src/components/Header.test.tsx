import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Header } from './Header';

// Mock useTheme
vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: vi.fn(),
  }),
}));

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<Header />);
    
    expect(screen.getByAltText('Storentia Logo')).toBeDefined();
    expect(screen.getByText('Log in')).toBeDefined();
    expect(screen.getByText('Sign up')).toBeDefined();
    
    const navLinks = ['Pricing', 'Experience', 'Portfolio', 'Clients', 'FAQ', 'Contact Us'];
    navLinks.forEach(link => {
      expect(screen.getByText(link)).toBeDefined();
    });
  });
});
