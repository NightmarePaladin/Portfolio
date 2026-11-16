import { useCallback, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const read = (): Theme =>
  document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable; theme still applies for this visit */
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}
