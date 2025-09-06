import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game intro', () => {
  render(<App />);
  const introElement = screen.getByText(/Rumah Ulang Tahun/i);
  expect(introElement).toBeInTheDocument();
});
