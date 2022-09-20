
import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import {instance} from './index'

function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


 const onClickLogin = async()=>{
  const result = await instance.post('/uaa',{
      email:email,
      password:password
    })
    console.log(result.data);
  }

  function onEmail(email){
    setEmail(email)
  }
  function onPassword(pass){
    setPassword(pass)
  }

  return (
    <div className="container">
      <div className='text-center  '>
        <LoginForm onclick={onClickLogin} onEmail={onEmail} onPassword={onPassword}/>
      </div>
    </div>
  );
}

export default App;
