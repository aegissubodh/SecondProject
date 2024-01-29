import React, { useState } from "react";


const Update =()=>{

    const [name,setName] = useState("");
    const [city,setCity] =  useState("");
    function saveUser(){
        console.log({name,city})
        let data  = {name,city}
        fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log("resule",result);
        })
    }

    return(<>
        <h1>Post API Example </h1>
        <input type = "text" value={name} onChange = {(e)=>{setName(e.target.value)}} name = "name"/><br/><br/>
        <input type="text" value = {city} onChange = {(e)=>{setCity(e.target.value)}} name = "city"/><br/><br/>
        <button type = "button" onClick ={saveUser}>save the user</button>
    </>
        

    )
}

export default Update;