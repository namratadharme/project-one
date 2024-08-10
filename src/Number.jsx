import React, { useState } from "react";

function  Number(){
    const[Counter, setCounter] = useState(0)
    function addData(){
        setCounter(Counter+1)
    }
    function removeData(){
        setCounter(Counter-1)
    }
    function resetData(){
        setCounter(0)
    }

    return(
        <>
         <h1 style={{textAlign: "center"}}>Counter</h1>
        <h2 style={{textAlign: "center"}}>{Counter}</h2>
        <div style={{borderRadius: 10, textAlign: "center"}}>
        <button onClick={addData} style={{backgroundColor: "lightgreen", border: "none", padding: 7, borderRadius: 4}}>Add</button>
        <button onClick={removeData} style={{backgroundColor: "red", border: "none", margin: 10, padding: 7, borderRadius: 4}}>Remove</button>
        <button onClick={resetData} style={{backgroundColor: "blue", border: "none", padding: 7, borderRadius: 4}}>Reset</button>
        </div>
        </>
    )
}
export default Number;