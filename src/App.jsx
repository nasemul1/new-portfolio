import React, { useContext, useEffect, useLayoutEffect } from 'react'
import Leftside from './pages/Leftside/Leftside'
import Middle from './pages/Middle/Middle'
import Rightside from './pages/Rightside/Rightside'
import { ThemeContext } from './context/themeContext'

const App = () => {

  const { bgColor } = useContext(ThemeContext);

  useLayoutEffect(()=>{
    document.body.style.backgroundColor = `${bgColor}`
  })

  return (
    <div className="mx-auto flex flex-col sm:flex-row sm:justify-center h-screen w-full">
      {/* left sidebar - profile info */}
      <Leftside />
      {/* Main Content - Scrollable */}
      <Middle />
      {/* Right Sidebar - Navigation Icons */}
      <Rightside />
    </div>
  )
}

export default App