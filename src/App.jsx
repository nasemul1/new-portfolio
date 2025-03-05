import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Middle from './components/Middle'
import MainLayout from './layout/MainLayout'
import { ThemeContext } from './context/themeContext'

const App = () => {

  const { bgColor } = useContext(ThemeContext);

  document.documentElement.style.setProperty('--bodyColor', bgColor)

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Middle />} />
        </Route>
      </Routes>
    </>
  )
}

export default App