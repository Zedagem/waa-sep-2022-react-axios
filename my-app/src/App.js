
import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import {instance} from './index'
import SignupForm from './components/SignupForm';




function App() {
  
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstName,setFirstName] = useState("");


 const onClickLogin = ()=>{
   instance.post('/uaa',{
      email:email,
      password:password
    })
    .then(response => {
      if(response.status == 200){
        console.log("success sign in");
        console.log(response.data.accessToken);
        localStorage.setItem('token',JSON.stringify(response.data))
      }
    })
    .catch(err => console.log("Catch", err.response.status))
    
  }
  const onClickSignup = ()=>{
      instance.post('/uaa/signup',{
        email:email,
        password:password,
        firstName:firstName
      }).then(response => {
        if(response.status == 200){
          console.log("success signing in");
        }
      }).catch(err => console.log(err))
  }

  function onEmail(email){
    setEmail(email)
  }
  function onPassword(pass){
    setPassword(pass)
  }
  function onFirstName(firstName){
    setFirstName(firstName)
  }


  return (
    <div className="container">
      <div className='text-center  '>
        <LoginForm onclick={onClickLogin} onEmail={onEmail} onPassword={onPassword}/>
      </div>
      <div className='text-center mt-5'>
        <SignupForm onclick={onClickSignup} onFirstName ={onFirstName} onEmail={onEmail} onPassword={onPassword} />
      </div>
    </div>
  );
}

export default App;
