import React from 'react'

const Rightside = () => {
  return (
    <nav className="fixed sm:relative bottom-0 w-full sm:w-[5%] bg-gray-800 text-white right-0 sm:h-full flex sm:flex-col items-center sm:justify-center sm:gap-y-6">
        <a href="#about" className="p-2 hover:text-yellow-400">👤</a>
        <a href="#skills" className="p-2 hover:text-yellow-400">💻</a>
        <a href="#projects" className="p-2 hover:text-yellow-400">📁</a>
    </nav>
  )
}

export default Rightside