import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reservation heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Make Your Reservation/i);
  expect(linkElement).toBeInTheDocument();
});
