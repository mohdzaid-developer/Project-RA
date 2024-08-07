import React from 'react'
import "./ForgetPassword.css"
import "../../authRoutes/signInUp/components/signIn/SignIn.css"
import { Link } from 'react-router-dom'

const ForgetPassword = () => {

    const handleSubmit=()=>{

    }
  return (
    <div className="forgetpassword">
        <div className="middleSlide">
        <div className='auth'>
      <div className="auth-heading">
        <h2>Forget Password</h2>
      </div>

      <div className="authSlides">
      <div className="authSlide">
      <input type="text" name="" id="" placeholder='Enter Email  '/>
      <Link to="/presel">   <h3>go back</h3></Link>
      </div>
      </div>
     

      <button className='authButton' onClick={handleSubmit}>Submit</button>


    </div>
        </div>
    
    </div>

  )
}

export default ForgetPassword
