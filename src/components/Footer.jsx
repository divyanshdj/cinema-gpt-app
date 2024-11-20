import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="relative w-full bg-black text-white py-6 text-center text-sm">
        <p>&copy; 2024 CinemaGPT. All rights reserved.</p>
        <p className='mt-3 font-medium '>Code By Divyansh</p>
        <div className="mt-3 flex justify-center space-x-4">
          <p className="cursor-pointer hover:text-gray-400">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:text-gray-400">
            Terms of Service
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
