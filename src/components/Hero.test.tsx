import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders hero content', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Introducing the F1 Keyboard/i)).toBeDefined();
    expect(screen.getByText(/Build better/i)).toBeDefined();
    expect(screen.getByText(/sites, faster/i)).toBeDefined();
    expect(screen.getByText(/Framer is the site builder/i)).toBeDefined();
    expect(screen.getByText('Start for free')).toBeDefined();
    expect(screen.getByText('Start with AI')).toBeDefined();
  });
});
