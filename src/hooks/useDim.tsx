import React, { useLayoutEffect, useRef, useState } from "react"
import { useDimInterface } from "./useDimInterface"

export const useDim = ({ 
  getter = defaultGetter, 
  on = "resize", 
  radiusOffset = 0 
}: useDimInterface) => {
  const ref = useRef(null)

  const [prop, setProp] = useState<any | null>(0)

  const finalGetter = typeof getter === "function" 
    ? getter : getter === "nopadding" 
      ? noPaddingGetter(radiusOffset) 
      : defaultGetter

  const handleWindowSizeChange = () => {
    try {
      setProp(finalGetter(ref.current))
    } catch {
      setProp(undefined)
    }
  }

  useLayoutEffect(() => {
    handleWindowSizeChange()
    window.addEventListener("load", () => {
      handleWindowSizeChange()
    })

    window.addEventListener("resize", () => {
      handleWindowSizeChange()
    })

    return () => {
      window.removeEventListener("load", handleWindowSizeChange)
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  return { ref, prop }
}

const defaultGetter = (current: any) => {
  return { width: current.offsetWidth, height: current.offsetHeight }
}

const noPaddingGetter = (radiusOffset: number) => (current: any) => {
  const { viewportElement } = current
  const { parentElement: child } = viewportElement
  let targetElement = child

  while (targetElement) {
    const { padding } = window.getComputedStyle(targetElement)
    
    if (!isNaN(parseFloat(padding)) && parseFloat(padding) > 0) {
      break
    }

    targetElement = targetElement.parentElement
  }

  const { 
    paddingTop, paddingBottom, paddingLeft, paddingRight 
  } = window.getComputedStyle(targetElement)
  const width = viewportElement.clientWidth - 
    parseFloat(paddingLeft) - parseFloat(paddingRight)
  const height = viewportElement.clientHeight - 
    parseFloat(paddingTop) - parseFloat(paddingBottom)

  return Math.min(width, height)/2 - radiusOffset
}
