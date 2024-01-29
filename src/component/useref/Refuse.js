import React from "react";
import { useRef } from "react";



const Refuse =() =>{
    const InputValue = useRef();
const focusInput = () => {
    InputValue.current.focus();
}
    return(<>

    
        <h1>This is how we can useRef hook</h1>
        <input type = "text" ref ={InputValue}/>
        <button onClick={focusInput}>Submit</button>

        </>

    )
}

export default Refuse;