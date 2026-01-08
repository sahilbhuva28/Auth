import React from 'react'
import img from "../assets/image.jpg"
import authimg from "../assets/authimg.jpg"

const Image = () => {
  return (
    <div className='w-140 h-165 flex'>
        <img src={authimg} className='hidden md:block rounded-3xl object-cover' alt="" />
    </div>
  )
}

export default Image