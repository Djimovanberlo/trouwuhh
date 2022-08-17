import { useState, useCallback, useEffect } from 'react'

export const useIsMediumScreen = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false)

  const getWidth = useCallback(e => {
    if (e.matches) {
      setIsMediumScreen(true)
    } else {
      setIsMediumScreen(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 576px)`)
    media.addEventListener('change', e => getWidth(e))

    if (media.matches) {
      setIsMediumScreen(true)
    }

    return () => media.removeEventListener('change', e => getWidth(e))
  }, [getWidth])

  return isMediumScreen
}
