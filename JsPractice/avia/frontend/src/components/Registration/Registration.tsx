import React, { useState, useEffect } from 'react'; 
import axios  from 'axios';
import { useHistory } from "react-router-dom";

import { setCookie } from '../../common';

const Registration = () => {
  const [isRegistration, setRegistration] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isRegistration) {
      // const history = useHistory();
      // history.push("/");
    }
  }, [isRegistration]);

  const handleRegistration = async () => {
    try {
      const user = {
        email: email,
        name: name,
        password: password
      };
      const req = await axios.post('/user/register', user,
      {
        headers: { 
          'content-type': 'application/json',
          // 'Access-Control-Allow-Origin': '*'
        }
      }
      );
      console.log(req);
      // setCookie('Authorization', data);
      setRegistration(true);
    } catch (e) {
      throw e.message;
    }
  }

  return (
    <div className='avia-login'>
      <h1>Registration</h1>
      <input type="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="paasword" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Registration</button>
    </div>
  )
};

export { Registration };