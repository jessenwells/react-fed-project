import { useState, useEffect } from 'react'

export const useMedia = () => {
 const [winLarge, setWinLarge] = useState()
 const [winMedium, setWinMedium] = useState()

 useEffect(() => {
  let lg = window.matchMedia('(max-width: 1200px)')
  const watchLg = (sz) => (sz.matches ? setWinLarge(false) : setWinLarge(true))
  lg.addListener(watchLg)
  watchLg(lg)

  let md = window.matchMedia('(max-width: 992px)')
  const watchMd = (sz) => (sz.matches ? setWinMedium(false) : setWinMedium(true))
  md.addListener(watchMd)
  watchMd(md)
  // eslint-disable-next-line
 }, [])

 return winLarge && winMedium
}
