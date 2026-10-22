import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /services/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /portfolio/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /contact me/i })).toBeInTheDocument();
});
