import React, { useState } from 'react';

function MyComponent(props) {
    const [count, setCount] = useState(100);

    // console.log("Hey! We're in the component");pp

    function myOnClickCount(e) {
        setCount(count + 1);
        // console.log('Count in component was clicked!', count);
    }

    return (
        <div style={{border: "solid green", padding: "10px"}} >
            <h2>Check out this cool component!</h2>
            <p onClick={myOnClickCount}>The component counter is at {count}</p>
            <p onClick={props.counterFunction}>The other count is at {props.countme}</p>
        </div>
    )
}

export default MyComponent;