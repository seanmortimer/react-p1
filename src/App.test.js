import React from 'react';
import { fireEvent, screen, act, render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


function click(txt) {
  const regTxt = new RegExp(txt, 'i')
  fireEvent.click(screen.getByText(regTxt));
}

// const testCounterFn = jest.fn();


test('test my clicking the counters', () => {
  // console.log('Hey we\'re testing')
  render(<App />);
  click('The magical counter is');
  click('The magical counter is');
  click('The magical counter is');
  click('The magical counter is');
  expect(screen.getByText(/The magical counter/i).innerHTML).
    toBe('The magical counter is at 14');
  expect(screen.getByText(/The mysterious/i).innerHTML).
    toBe('The mysterious index is at 20');
  expect(screen.getByText(/The component/i).innerHTML).
    toBe('The component counter is at 100');
  expect(screen.getByText(/The other/i).innerHTML).
    toBe('The other count is at 14');

  click('The mysterious index');
  click('The mysterious index');
  click('The mysterious index');
  expect(screen.getByText(/The magical counter/i).innerHTML).
    toBe('The magical counter is at 14');
  expect(screen.getByText(/The mysterious/i).innerHTML).
    toBe('The mysterious index is at 20');
  expect(screen.getByText(/The component/i).innerHTML).
    toBe('The component counter is at 100');
  expect(screen.getByText(/The other/i).innerHTML).
    toBe('The other count is at 14');

  click('The magical counter is');
  expect(screen.getByText(/The magical counter/i).innerHTML).
    toBe('The magical counter is at 15');
  expect(screen.getByText(/The mysterious/i).innerHTML).
    toBe('The mysterious index is at 23');
  expect(screen.getByText(/The component/i).innerHTML).
    toBe('The component counter is at 100');
  expect(screen.getByText(/The other/i).innerHTML).
    toBe('The other count is at 15');


  click('The component counter');
  click('The component counter');
  click('The component counter');
  expect(screen.getByText(/The magical counter/i).innerHTML).
    toBe('The magical counter is at 15');
  expect(screen.getByText(/The mysterious/i).innerHTML).
    toBe('The mysterious index is at 23');
  expect(screen.getByText(/The component/i).innerHTML).
    toBe('The component counter is at 103');
  expect(screen.getByText(/The other/i).innerHTML).
    toBe('The other count is at 15');


  click('The other count');
  click('The other count');
  click('The other count');
  expect(screen.getByText(/The magical counter/i).innerHTML).
    toBe('The magical counter is at 18');
  expect(screen.getByText(/The mysterious/i).innerHTML).
    toBe('The mysterious index is at 23');
  expect(screen.getByText(/The component/i).innerHTML).
    toBe('The component counter is at 103');
  expect(screen.getByText(/The other/i).innerHTML).
    toBe('The other count is at 18');

    click('The mysterious index');
  click('The magical counter is');
  expect(screen.getByText(/The magical counter/i).innerHTML).
  toBe('The magical counter is at 19');
expect(screen.getByText(/The mysterious/i).innerHTML).
  toBe('The mysterious index is at 24');
expect(screen.getByText(/The component/i).innerHTML).
  toBe('The component counter is at 103');
expect(screen.getByText(/The other/i).innerHTML).
  toBe('The other count is at 19');
});