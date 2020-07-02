import { useRecoilState } from 'recoil'
import { darkModeSelectorName, darkModeState } from '../recoil/atoms'

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useRecoilState(darkModeState)
  const toggleDarkMode = () => {
    localStorage.setItem(darkModeSelectorName, !isDarkMode)
    setDarkMode(!isDarkMode)
  }
  return [isDarkMode, toggleDarkMode]
}

export default useDarkMode