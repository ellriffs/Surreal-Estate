import { render, screen } from '@testing-library/react';
import App from '../Components/App';

describe(App, () => {
test('renders App in the DOM', () => {
  render(<App />)
  expect(<App />).toMatchSnapshot()
});

test('Contains Surreal Estate Text', () => {
  render(<App />)
  const linkElement = screen.getByText(/Surreal Estate/i)
  expect(linkElement).toBeInTheDocument()
})
})