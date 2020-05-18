import React, { useState } from 'react';

function MyComponent() {
    const [count, setCount] = useState(100);

    function myOnClickCount(e) {
        setCount(count + 1);
        console.log('Count in component was clicked!', count);
    }

    return (
        <div style={{border: "solid green", padding: "10px"}} >
            <h2>Check out this cool component!</h2>
            <p onClick={myOnClickCount}>The component counter is at {count}</p>
            {/* <p onClick={myOnClickIndex}>The mysterious index is at {index}</p> */}
        </div>
    )
}

export default MyComponent;