
//PropChanging
import React, { useState ,useEffect } from "react";


const Child =({a,b})=>{

    useEffect(()=>{
     
        console.log("a has chanaged");
     },[a])
  return(
    <h1>value of a:{a} b:{b}</h1>
  )

}
const Parent2 = ()=>{
   const [count1,setCount1]  = useState(0);
   const [count2,setCount2]  = useState(0);

    return(<>
        <h2>this is Parent2</h2>
        <Child a ={count1} b ={count2}/>
        <button onClick={()=>setCount1(count1 +1)}>Incrment count 1</button>
        <button onClick={()=>setCount2(count2 +1)}>Incrment count 2</button>
    </>

    );

}

export default Parent2;