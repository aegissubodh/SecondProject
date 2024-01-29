import React ,{useState,createContext } from "react";
//import { createContext } from "react";
import Consumer from "./Consumer";
export const MyContext = createContext("");
function Provider(){
    const [text, setText] = useState("vamsee");
    return(<>
        <MyContext.Provider value={{text,setText}}>
        <Consumer/>
        </MyContext.Provider>
        <h2>This is Provider</h2>
        </>
        
    )
}

export default Provider;