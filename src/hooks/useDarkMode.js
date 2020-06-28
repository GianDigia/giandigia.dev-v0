import { useState } from 'react'

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!isDarkMode)
  return [isDarkMode, toggleDarkMode]
}

export default useDarkMode