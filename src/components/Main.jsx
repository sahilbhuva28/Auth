import React from 'react'
import Login from './login'
import SocialIcons from './SocialIcons'
import SignUp from './SignUp'

const Main = () => {
  return (
    <div className='flex bg-cyan-700 w-140 h-165 rounded-3xl flex-col items-center justify-between '>
    <Login/>
    <SignUp/>
    <SocialIcons/>
    </div>
  )
}

export default Main