import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// describe("App component", () => {
//   it("renders correct heading", () => {
//     const { getByRole } = render(<App />);
//     expect(getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });

describe("App component", () => {
  it('renders Magnificent Monkeys', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: 'Click me' });

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});