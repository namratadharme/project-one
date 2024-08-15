import React, {useState } from "react";
import './login.css';

function Loginpage(){
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enabled, setEnabled] = useState('false')
     
    
    function getemail(event){
      setEmail(event.target.value)
       console.log(event.target.value)
    }

    function getpassword(nam){
     setPassword(nam.target.value)
     console.log(nam.target.value)
    }
   
    function CheckData(){
        if(email != "" && password != ""){
          return true
    }
    else {
        return false
    }  
    
}
    return(
        <div id="container">
            <h1>Login-page</h1>
            <label>email</label>
            <input onChange={getemail} className="inputValue"></input>
            <label>password</label>
            <input onChange={getpassword} type="password" className="inputValue"></input>
            <button id="loginbtn" onClick={CheckData}>Loginin</button>
        </div>
    )
}
export default Loginpage