import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// describe("App component", () => {
//   it("renders correct heading", () => {
//     const { getByRole } = render(<App />);
//     expect(getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });

// describe("App component", () => {
//   it('renders Magnificent Monkeys', () => {
//     const { container } = render(<App />);
//     expect(container).toMatchSnapshot();
//   });

//   it("renders radical rhinos after button click", () => {
//     render(<App />);
//     const button = screen.getByRole("button", { name: 'Click me' });

//     userEvent.click(button);

//     expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//   });
// });

// test ('render h1 element', () => {
//   render(<App />);
//   screen.debug();
//   expect(screen.getByText('Hello World')).toBeInTheDocument();
// })

// test('List contains 5 animals', () => {
//   render(<App />);

//   const listElement = screen.getByRole('list');
//   const listItems = screen.getAllByRole('listitem');

//   expect(listElement).toBeInTheDocument();
//   expect(listElement).toHaveClass('animals');
//   expect(listItems.length).toEqual(5);
// })

// window.fetch = jest.fn(() => {
//   const user = { name: 'Jack', email: 'jack@email.com' }

//     return Promise.resolve({
//     json: () => Promise.resolve(user),
//   });
// });

//All in one test suite
// describe('Testing suite', () => {
//   // Use a mock to make the fake API call - put inside the test
// test('Loading text is shown while API request is in progress', async () => {
//   window.fetch = jest.fn(() => {
//     const user = { name: 'Jack', email: 'jack@email.com' }
  
//       return Promise.resolve({
//       json: () => Promise.resolve(user),
//     });
//   });
//   render(<App />);
//   const loading = screen.getByText('Loading...');

//   expect(loading).toBeInTheDocument();

//   await waitForElementToBeRemoved(() => screen.getByText('Loading...'))
// })

// // Second test to assert the user is successfully fetched and name is rendered in DOM
// test("user's name is rendered", async () => {
//   window.fetch = jest.fn(() => {
//     const user = { name: 'Jack', email: 'jack@email.com' }
  
//       return Promise.resolve({
//       json: () => Promise.resolve(user),
//     });
//   });
//   render(<App />);
//   const username = await screen.findByText('Jack');

//   expect(username).toBeInTheDocument();
// })

// //Final test to see if error message displays
// test('error message is shown', async () => {
//   window.fetch.mockImplementationOnce(() => {
//     return Promise.reject({message: 'API is down'});
//   });

//   render(<App />);

//   const errorMessage = await screen.findByText('API is down');
//   expect(errorMessage).toBeInTheDocument();
// })
// })

describe('Testing App Component', () => {
  test('Counter is incremented', () => {
    render(<App />);

    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByText('Increment');

    userEvent.click(incrementBtn);
    userEvent.click(incrementBtn);
    expect(counter.textContent).toEqual('2')
  })

  test('Counter is decremented', () => {
    render(<App />);

    const counter = screen.getByTestId('counter');
    const decrementBtn = screen.getByText('Decrement');

    userEvent.click(decrementBtn)
    userEvent.click(decrementBtn)

    expect(counter.textContent).toEqual('-2')
  })
})