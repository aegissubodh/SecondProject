import React, { useState } from "react";



const Counter = () =>{

    const [counter,setCounter] =useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    return(
    <>
        <h1 data-testid="heading">This is our counter component</h1>
        <h1> counter:{counter}</h1>
        <button  data-testid="increment" onClick={incrementCounter}>
            +
        </button>
        <button  data-testid="decrement" onClick={decrementCounter}>
        -
        </button>
        </>
    )

}

export default Counter;