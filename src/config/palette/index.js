import { palette as light } from "./light"
import { palette as dark } from "./dark"

export const getPalette = theme => {
  return theme === "dark" ? dark : light
}
