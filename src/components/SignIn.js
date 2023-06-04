import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { signin, signout } from '../actions/singin';

const SignIn = () => {

  const dispatch=useDispatch();
  const [user, setuser] = useState({
    name:'',
    password:''
  })
  const navigate=useNavigate();
  const sign=useSelector((state)=>(state.signIn))
  const handleSubmit=(e)=>{
    
    e.preventdefault()
    console.log('in sign in',sign)
    if(!sign)
      dispatch(signin())
    else
      dispatch(signout())  

    //  navigate('/') 
  }
  const handleSignIn=(e)=>{
    
  
    console.log('in sign in',sign)
    // if(!sign)
    //   dispatch(signin())
    // else
    //   dispatch(signout())  
  }
  return (
    <div className='SignIN
    '>SignIn

        <form action="" onSubmit={handleSubmit}>
            <input type="text" id='userName'value={user.name} onChange={(e)=>setuser({...user,[user.name]:e.target.value})} />
            <input type="password" id='password'value={user.name} onChange={(e)=>setuser({...user,[user.name]:e.target.value})} />
            <button type="submit">sign In</button>
        </form>
        <button onClick={(e)=>{handleSignIn(e)}} >signIn</button>

    </div>
  )
}

export default SignIn