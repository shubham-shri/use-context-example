import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import './HomePage.css'

const HomePage = () => {
  const darkTheme = useContext(ThemeContext)
  return (
    <div className={`${darkTheme ? `dark-theme` : `light-theme`}`}>
      HomePage
    </div>
  )
}

export default HomePage
