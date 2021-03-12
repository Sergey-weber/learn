import React, { useState, useEffect } from 'react'; 
import axios  from 'axios';
import { useHistory } from "react-router-dom";

import { setCookie } from '../../common';

const Login = () => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [email, setEmail] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>('');

  useEffect(() => {
    if (isAuth) {
      // const history = useHistory();
      // history.push("/");
    }
  }, [isAuth]);

  const handleLogin = async () => {
    try {
      const user = {
        email: email,
        password: password
      };
      const request = await axios.post('/user/login', user,
        {
          headers: { 
            'content-type': 'application/json'
          }
        }
      );
      
      console.log(request);
      // setCookie('Authorization', data);
      setAuth(true);
    } catch (e) {
      throw e.message;
    }
  }

  return (
    <div className='avia-login'>
      <h1>Auth</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="paasword" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
};

export { Login };