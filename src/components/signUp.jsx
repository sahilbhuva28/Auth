import React from 'react'

const signUp = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center min-h-screen'>
        <input type="text" name="name" placeholder='Name'
        className='' />
        <input type="password" name="password" placeholder='Create Password'/>
        <input type="text" name="mobileNo" placeholder='Mobile Number' />
        <input type="text" name="otp" placeholder='OTP' />
        <button>Sign Up</button>
    </div>
  )
}

export default signUp