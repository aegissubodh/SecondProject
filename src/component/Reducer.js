import React, { useReducer } from "react";

const Reducer = () =>{

    const reducer = (state, action) => {
        switch (action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          case 'DECREMENT':
            return { count: state.count - 1 };
          case 'RESET':
            return { count: 0 };
          default:
            return state;
        }
      };
   
      const [state, dispatch] = useReducer(reducer, { count: 0 });

     
    return(<>
        <h1>This is our reducer component</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

    </>
    )
}

export default Reducer;