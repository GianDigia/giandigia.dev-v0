import { useRecoilState } from 'recoil'
import { darkModeState } from '../recoil/atoms'

const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useRecoilState(darkModeState)
  const toggleDarkMode = () => setDarkMode(!isDarkMode)
  return [isDarkMode, toggleDarkMode]
}

export default useDarkMode