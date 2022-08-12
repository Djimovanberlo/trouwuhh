import { useState, useCallback, useEffect } from 'react'

export const useIsLage = () => {
  const [isLarge, setIsLarge] = useState(false)

  const getWidth = useCallback(e => {
    if (e.matches) {
      setIsLarge(true)
    } else {
      setIsLarge(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 768px)`)
    media.addEventListener('change', e => getWidth(e))

    if (media.matches) {
      setIsLarge(true)
    }

    return () => media.removeEventListener('change', e => getWidth(e))
  }, [getWidth])

  return isLarge
}
