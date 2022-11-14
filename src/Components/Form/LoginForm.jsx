import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../../store";
import APIManager from "../../Containers/api/axios";

function LoginForm() {
  const [auth, setAuth] = useState("");
  const [password, setPassword] = useState("");

  const [_, setUser] = useAtom(userAtom);

  const data = {
    identifier: auth,
    password: password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await APIManager.login(data);
      setUser(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
    
    <h1 className="title-form">Login</h1>
    <form onSubmit={handleSubmit} className="container-form">
      <label htmlFor="username">Username </label>
      <input
        onChange={(e) => setAuth(e.target.value)}
        value={auth}
        type="text"
        id="username"
        placeholder="Username"
        />
<label htmlFor="password">Password</label>
      
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="text"
        id="password"
        placeholder="password"
        />
 
       
    
      <button>Sign Up</button>
    </form>
    </>
  )
}

export default LoginForm;
