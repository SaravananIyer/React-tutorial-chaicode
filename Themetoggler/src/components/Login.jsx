import React, { useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

 const handleSubmit = () =>{

 }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'/>
      <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
      <button onClick={handleSubmit}></button>
    </div>
  );
}

export default Login;
