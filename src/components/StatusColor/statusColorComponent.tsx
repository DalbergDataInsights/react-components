import React, { useEffect, useState } from "react"
import { iStatusColor } from "./statusColorInterface"

export const StatusColorComponent = ({
  color,
  size = "1rem",
  props,
}: iStatusColor) => {
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
