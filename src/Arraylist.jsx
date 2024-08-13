import React, { useState } from "react"
import Card from "./Card";
import './card.css';


function Arraylist(){
    
   const [name, setName] = useState(["namrata","karan","pratik","tejas"])
   const [data, setData] = useState("")
   
     function getData(event){
        setData(event.target.value) 
       
     }
     function addValue(){
        const newArray = [...name, data] 
        setName(newArray)
        
        
     }
     function removeValue(){
      const newArray = [...name] 
      newArray.pop()
      setName(newArray)

     }
     function resetValue(){
      setName([])

     }
    return (
        <>
        <h1>Card Add From React</h1>
        <div id="container">
        {name.map((element)=>{return <Card data={element}/>})}
        </div>
        <input onChange={getData}></input>
        <button onClick={addValue}style={{marginLeft:"5px"}}>Add</button>
        <button onClick={removeValue}style={{margin: "5px"}}>Remove</button>
        <button onClick={resetValue}>Reset</button>
        </>
    )
}
export default Arraylist