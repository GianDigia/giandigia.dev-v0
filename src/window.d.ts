declare module 'window' {
  global {
    interface Window {
      __theme: themeStrings
      __onThemeChange: (t: any) => void
      __togglePreferredTheme: (theme: themeStrings) => void
    }
  }
}

type themeStrings = 'dark' | 'light'