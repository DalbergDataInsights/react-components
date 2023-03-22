import React, { useEffect, useState } from "react"
import { iStatusCircle } from "./statusCircleInterface"

export const StatusCircleComponent = ({
  color,
  size = "1rem",
  props,
}: iStatusCircle) => {
  const [dim, setDim] = useState("0rem")

  useEffect(() => {
    setDim(size)
  }, [])

  return (
    <span
      {...props.circle}
      style={{
        ...props.circle.style,
        ...{
          display: "inline-block",
          width: dim,
          height: dim,
          backgroundColor: color,
        },
      }}
    />
  )
}
