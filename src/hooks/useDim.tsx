import React, { useLayoutEffect, useRef, useState } from "react"

export const useDim = ({ getter = defaultGetter, on = "resize" }) => {
  const ref = useRef(null)

  const [prop, setProp] = useState(0)

  const handleWindowSizeChange = () => {
    try {
      setProp(getter(ref.current))
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

function defaultGetter(current: any) {
  return { width: current.offsetWidth, height: current.offsetHeight }
}
