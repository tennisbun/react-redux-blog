import React from 'react'
import {useState} from 'react'

function Nav() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("")

  let errorClass = "text-xs text-rose-600"; 
  
  let login = (e)=> {
    e.preventDefault();
    alert("test");
  };

  return (
    <div className="flex justify-between p2 border">
      <div className="text-sm text-black px-10 py-2">
        Your Space
      </div>
      <div className="text-sm px-10 py-2">
        <form onSubmit={login}>
          <input className="text-xs px-2 outline-none w-36 border"  placeholder="username"></input>
          <input className="text-xs ml-2 px-2 outline-none w-36 border"  placeholder="password"></input>
          <button type="submit" 
            className=" text-white text-xs border bg-blue-400 ml-2 px-2 hover:bg-blue-500 duration-300 ">Login</button> 
        </form> 
    </div>
    </div>
  )
}

export default Nav
