import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './MyComponent'

let index = 20;  // This is state. When hands are off keyboard, app remembers index
                 // index is regular JS state, count is React state

function App() {
  const [count, setCount] = useState(10);
  
  function myOnClickCount(e) {
    console.log('Count was clicked');
    setCount(count + 1);
  }

  function myOnClickIndex(e) {
    index++;
    console.log('Index was clicked')
  }

  return (
    <div className="App">

      <header className="App-header">
        <div style={{border: "solid red", padding: "20px"}}>
          <h1>Hello World!</h1>
          <p onClick={myOnClickCount}>The magical counter is at {count}</p>
          <p onClick={myOnClickIndex}>The mysterious index is at {index}</p>
        </div>
        <MyComp />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
