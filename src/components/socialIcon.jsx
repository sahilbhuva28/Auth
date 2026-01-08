import React from 'react'
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcon = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Divider with "OR CONTINUE WITH" text */}
      <div className="relative flex items-center justify-center my-6">
        <div className="flex-grow h-[1px] bg-[#1976D2]"></div>
        <p className="relative z-10 px-4 text-sm text-[#1976D2] bg-white font-medium">
          OR CONTINUE WITH
        </p>
        <div className="flex-grow h-[1px] bg-[#1976D2]"></div>
      </div>

      {/* Social buttons */}
      <div className="flex items-center justify-center gap-[60px]">
        <button 
          className="w-[76px] h-[54px] bg-[#1976D2] rounded-[27px] 
           py-[12px] px-[26px]
           flex items-center justify-center
           text-white text-xl opacity-100
           hover:opacity-80 transition-opacity duration-300
           shadow-[0px_3px_10.4px_4px_rgba(0,0,0,0.25)]"
        >
          <FaFacebookF />
        </button>
        
        <button 
          className="w-[76px] h-[54px] bg-[#1976D2] rounded-[27px] 
           py-[12px] px-[26px]
           flex items-center justify-center
           text-white text-xl opacity-100
           hover:opacity-80 transition-opacity duration-300
           shadow-[0px_3px_10.4px_4px_rgba(0,0,0,0.25)]"
        >
          <FaGoogle />
        </button>
        
        <button 
          className="w-[76px] h-[54px] bg-[#1976D2] rounded-[27px] 
           py-[12px] px-[26px]
           flex items-center justify-center
           text-white text-xl opacity-100
           hover:opacity-80 transition-opacity duration-300
           shadow-[0px_3px_10.4px_4px_rgba(0,0,0,0.25)]"
        >
          <FaXTwitter />
        </button>
      </div>
    </div>
  )
}

export default SocialIcon