import React from 'react';
// import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen, act, render } from '@testing-library/react';
import MyComp from './MyComponent';

let container = null;

function click(txt) {
    const regTxt = new RegExp(txt, 'i')
    fireEvent.click(screen.getByText(regTxt));
}

const testCounterFn = jest.fn();


// beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
// });

// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   });

test('test my component plumbing', () => {
    // console.log('Hey we\'re testing')
    act(() => {
        render(<MyComp counterFunction={testCounterFn} />);
        click('component counter');
        click('component counter');
        click('other count');
        click('other count');
        click('other count');
        click('other count');
    });

    // const conta = container.querySelector('H2');
    // console.log('container:', container.textContent);

    screen.debug();
    console.log('length:', testCounterFn.mock.calls.length); 
    // console.log('calls:', testCounterFn.mock); 
    //   console.log('screen:', screen.textContent);
    // const el = screen.getByText(/check out this cool/i);

    // expect(container.textContent).toContain('Check out this cool component!');
    // expect(container.textContent).toContain('The component counter is');
});