import React, { useState } from "react";

const ShowingData = () => {

    const [data, setData] = useState(null);
    const [print, SetPrint] = useState("false");

    function getData(e) {
        setData(e.target.value);
        SetPrint(false);
    }


    return (<>

        {
            print ?
                <h1>{data}</h1>
                : null
        }
        <input type="text" onChange={getData} />
        <button onClick={() => SetPrint(true)}>Print value</button>
    </>

    )


}

export default ShowingData;