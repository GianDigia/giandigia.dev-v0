import React from "react"

import GlobalStyle from "./src/misc/globalStyle"

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyle />
    {element}
  </>
)
