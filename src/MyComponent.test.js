import React from 'react';
import { fireEvent, screen, act, render } from '@testing-library/react';
import MyComp from './MyComponent';


function click(txt) {
    const regTxt = new RegExp(txt, 'i')
    fireEvent.click(screen.getByText(regTxt));
}

const testCounterFn = jest.fn();


test('test my component plumbing', () => {
    // console.log('Hey we\'re testing')
   render(<MyComp counterFunction={testCounterFn} countme={10} />);
    click('The component counter is');
    click('The component counter is');
    click('The component counter is');
    click('The component counter is');
    click('The other count is');
    click('The other count is');
    click('The other count is');

    // console.log('text:', screen.getByText(/The component counter/i).innerHTML);
    expect(testCounterFn.mock.calls.length).toBe(3);
    expect(screen.getByText(/The component counter/i).innerHTML).
        toBe('The component counter is at 104');
    screen.debug();
});

