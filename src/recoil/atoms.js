import { atom } from 'recoil'
import { windowExists } from '../utils/app'

export const darkModeSelectorName = 'darkModeActive'
let localValue
if (windowExists) {
  localValue = localStorage.getItem(darkModeSelectorName) === 'true' || false
} else {
  localValue = false
}
export const darkModeState = atom({ key: 'darkModeActive', default: localValue })