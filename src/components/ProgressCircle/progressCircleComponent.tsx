import React, { useState, useEffect } from "react"
import { iProgressCircle } from "./progressCircleInterface"
import CountUp from "react-countup"
import { useDim } from "../../hooks/useDim"

export const ProgressCircleComponent = ({
  value,
  color = "#D1D1D6",
  minValue = 0,
  maxValue = 100,
  suffix = "%",
  props,
}: iProgressCircle) => {
  // calculating 0.5rem of root font size to offset radius in px
  const rootFontSize = window
    .getComputedStyle(document.documentElement)
    .fontSize.match(/\d+/g)
  const radiusOffset = rootFontSize ? Number(rootFontSize[0]) : 16

  const { ref, prop } = useDim({ getter: "client" })

  const radius = prop ? Math.min(prop.width, prop.height) / 2 - radiusOffset : 0

  const circumference = Math.round(radius * 2 * Math.PI)
  const [offset, setOffset] = useState("300%")

  useEffect(() => {
    let progress = Math.min(value, maxValue)
    progress = Math.max(progress, minValue)
    progress = isNaN(value) ? 0 : (progress - minValue) / (maxValue - minValue)

    const offset = (1 - progress) * circumference
    setOffset(`${offset}`)
  }, [radius])

  if (!radius) {
    return <></>
  }

  return (
    <>
      <svg _prop-target="circle" {...props.circle}>
        <circle
          _prop-target="total"
          {...props.total}
          cx={"50%"}
          cy={"50%"}
          r={radius}
          ref={ref}
        />
        <circle
          _prop-target="progress"
          {...props.progress}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          cx={"50%"}
          cy={"50%"}
          r={radius}
        />
        <CountUp
          _prop-target="counter"
          {...props.counter}
          start={minValue}
          end={value}
          suffix={suffix}
        >
          {({ countUpRef }) => (
            <text
              _prop-target="value"
              ref={isNaN(value) ? null : countUpRef}
              x={"50%"}
              y={"50%"}
              {...props.value}
            >
              N/A
            </text>
          )}
        </CountUp>
      </svg>
    </>
  )
}
