import React from "react";
import { MyContext } from "./Provider";
import { useContext } from "react";

function Consumer(){
    const {text,setText} = useContext(MyContext)
return(<>
  <h1>Hellow this is Consumer</h1>
  <button onClick={()=>setText("praveen")}>Click me</button>
  <h2>my name is {text}</h2>
  </>
)
}
export default Consumer;

