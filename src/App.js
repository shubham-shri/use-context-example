import React, { useState } from 'react'
import HomePage from './HomePage.jsx'
import ThemeContext from './ThemeContext.jsx'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className="App">
      <button
        onClick={() => {
          setDarkMode(!darkMode)
        }}
      >
        Toggle Theme
      </button>
      <ThemeContext.Provider value={darkMode}>
        <HomePage />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
