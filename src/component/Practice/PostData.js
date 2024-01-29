import React, { useEffect, useState } from "react";

const PostData = () =>{

    const [data,setData] = useState([]);
    useEffect(()=>{
    fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8').then((result)=>{
        result.json().then((resp)=>{
            console.log("result",resp)
            setData(resp)
        })
    })

    },[])
    console.log(data);
    function DeleteUser(id){
        fetch(`https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)

            })
        })
    }
    return(
        <>
        <h1>Get the API CALL </h1>
        <table class="table table-bordered">
            <tbody>
            <tr>
              
                <td>Name</td>
                <td>City</td> 
                <td>Operaiton</td>
                
                </tr>
                
            </tbody>
            {
                data.map((item,i)=>
                <tbody>
                    <tr key ={i}>
                
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>
                    <button onClick={(()=>DeleteUser(item.id))}>Delete</button>
                    </td>
                    
                </tr>
                </tbody>
                )
                
            }
        </table>
        </>
    )
}

export default PostData;