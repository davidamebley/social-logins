import React from 'react';
import Google from '../img/google.png'
import Facebook from '../img/facebook.png'
import Github from '../img/github.png'

const Login = () => {
  return (
    <div className='login'>
        <h1 className="login-title">Choose a Login Method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="login-button google">
                    <img src={Google} alt="" className="icon" />
                    Google
                </div>
                <div className="login-button facebook">
                    <img src={Facebook} alt="" className="icon" />
                    Facebook
                </div>
                <div className="login-button github">
                    <img src={Github} alt="" className="icon" />
                    GitHub
                </div>
            </div>

            <div className="center">
                <div className="line" />
                <div className="or">OR</div>
            </div>

            <div className="right">
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password' />
                <button className="submit">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login