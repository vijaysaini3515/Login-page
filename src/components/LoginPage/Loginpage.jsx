import React from 'react';
import './Login.scss';
import twitter from '../../images/twitter.png'
import google from '../../images/google.png'
import apple from '../../images/apple.png'

const Loginpage = () => {
  return (
    <div className='main_container'>
      <div className="login_container">
       <img src={twitter} alt="logo" className='twitter-logo'/>
       <h2 className='heading'>Sign to twitter</h2>
       <button className='btn1'>
        <img src={google} alt="google" />
        Sign With Google
       </button>

       <button className='btn1'>
        <img src={apple} alt="google" />
        Sign With Apple
       </button>

       <hr />
       <span>or</span>

       <form>
        <input type="text" placeholder='Enter Phone and Email'/>
         <button className='btn2'>Next</button>
       </form>

        <button className='btn1'>Forget Password</button>
        <p>Don't have an account <a href='#'>Sing Up</a> </p>
      </div>
    </div>
  )
}

export default Loginpage
