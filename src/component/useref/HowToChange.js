import React, { useRef, useState ,useEffect} from "react";

const HowToChange =() =>{
   const[InputValue,setInputValue] = useState();
   const count = useRef(0);

   useEffect(() => {
    count.current = count.current + 1;
},[InputValue])


    return(<>
        <h1>This is how we can show the previous value useing useRef</h1>
        <h2>count:{count.current}</h2>
        <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
        {/* <h3>Previous value:{previouseInputValue.current}</h3> */}
    </>

    )
}

export default HowToChange;