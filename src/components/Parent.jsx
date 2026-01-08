import React from 'react'
import Image from './image'
import Main from './Main'

const Parent = () => {
  return (
    <div className='p-10 w-full h-screen flex items-center justify-around '>
        <Image/>
        <Main/>
    </div>
  )
}

export default Parent