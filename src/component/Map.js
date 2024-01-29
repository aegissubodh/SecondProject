import React from "react";
export default function MyFunction() {
    let arr1 = [
        { id: 1, name: "praveen" },
        { id: 2, name: "vamsee" },
        { id: 3, name: "mouli" },
        { id: 4, name: "gaurav" },

    ]
    return (
    <>
        

            {
                arr1.map((item,index) => (<>
                    <h1>{item.id}</h1>
                    <h2>{index}</h2>
                    </>
                ))
            }

     
        </>

    )
}

//to create nested map method using nested array