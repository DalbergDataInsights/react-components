import React, { useLayoutEffect, useRef, useState } from "react"

export const useDim = ({ getter = "offset", on = "resize" }) => {
  const ref = useRef(null)

  const [prop, setProp] = useState(0)

  const getterFn = GETTERS[getter] || getter

  const handleWindowSizeChange = () => {
    try {
      setProp(getterFn(ref.current))
    } catch {
      setProp(undefined)
    }
  }

  useLayoutEffect(() => {
    handleWindowSizeChange()
    window.addEventListener("load", () => {
      handleWindowSizeChange()
    })

    window.addEventListener(on, () => {
      handleWindowSizeChange()
    })

    return () => {
      window.removeEventListener("load", handleWindowSizeChange)
      window.removeEventListener(on, handleWindowSizeChange)
    }
  }, [])

  return { ref, prop }
}

function offsetGetter(current: any) {
  return { width: current.offsetWidth, height: current.offsetHeight }
}

const clientGetter = (current: any) => {
  return {
    width: current.viewportElement.clientWidth,
    height: current.viewportElement.clientHeight,
  }
}

const GETTERS = {
  offset: offsetGetter,
  client: clientGetter,
}
