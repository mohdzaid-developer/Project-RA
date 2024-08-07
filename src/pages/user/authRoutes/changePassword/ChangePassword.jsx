import React from 'react'
import "./ChangePassword.css"
import "../signInUp/components/signIn/SignIn.css"
import { Link } from 'react-router-dom'

const ChangePassword = () => {

    const handleSubmit=()=>{

    }
  return (
    <div className="forgetpassword">
        <div className="middleSlide">
        <div className='auth'>
      <div className="auth-heading">
        <h2>Change Password</h2>
      </div>

      <div className="authSlides">
      <div className="authSlide">
      <input type="password" name="" id="" placeholder='Enter password  '/>
      </div>

      <div className="authSlide">
      <input type="password" name="" id="" placeholder='Enter password again  '/>
      <Link to="/presel">   <h3>go back</h3></Link>
      </div>
      </div>
     

      <button className='authButton' onClick={handleSubmit}>Submit</button>


    </div>
        </div>
    
    </div>

  )
}

export default ChangePassword
