import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Hero } from './Hero';

// Mock AnoAI to avoid WebGL context issues in test environment
vi.mock('./ui/animated-shader-background', () => ({
  default: () => <div data-testid="ano-ai-mock" />
}));

describe('Hero', () => {
  it('renders hero content', () => {
    render(<Hero />);
    
    expect(screen.getByText(/a product by/i)).toBeDefined();
    expect(screen.getByAltText(/techsolace/i)).toBeDefined();
    expect(screen.getByText(/Build better/i)).toBeDefined();
    expect(screen.getByText(/stores, faster/i)).toBeDefined();
    expect(screen.getByText(/Experience the future/i)).toBeDefined();
    expect(screen.getByText('Get Started')).toBeDefined();
    expect(screen.getByText('View Showcase')).toBeDefined();
  });
});
