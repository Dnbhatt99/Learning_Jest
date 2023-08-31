import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((prev) => prev + 1);
    }
    
    const decrement = () => {
        setCount((prev) => prev - 1);
    }

    const restart = () => {
        setCount(0);
    }

    const switchsigns = () => {
        setCount((prev) => prev * -1);
    }

    return (
        <div>
            <h1>
                Counter: <h3>{count}</h3>
            </h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={restart}>Restart</button>
                <button onClick={switchsigns}>Switch Signs</button>
            </div>
        </div>
    )
}

export default Counter;