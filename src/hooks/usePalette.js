import useDarkMode from './useDarkMode'
import { palette as lightPalette } from './../config/palette/light'
import { palette as darkPalette } from './../config/palette/dark'

const usePalette = () => {
  const [isDark] = useDarkMode()
  return isDark ? darkPalette : lightPalette
}

export default usePalette