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
  const { ref, prop: radius } = useDim({ getter: (c) => Math.min(c.viewportElement.clientWidth, c.viewportElement.clientHeight)/2 })
  const circumference = Math.round(radius * 2 * Math.PI)
  const [offset, setOffset] = useState("300%")

  useEffect(() => {
    const progress = (value - minValue) / (maxValue - minValue)
    const offset = (1 - progress) * circumference
    setOffset(`${offset}`)
  }, [radius])

  return (
    <>
      <svg {...props.circle}>
        <circle
          {...props.total}
          cx={"50%"}
          cy={"50%"}
          r={`calc(${radius}px - 0.5rem)`}
          ref={ref}
        />
        <circle
          {...props.progress}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          cx={"50%"}
          cy={"50%"}
          r={`calc(${radius}px - 0.5rem)`}
        />
        <CountUp
          {...props.counter}
          start={minValue}
          end={value}
          suffix={suffix}
        >
          {({ countUpRef }) => (
            <text
              ref={countUpRef}
              x={"50%"}
              y={"50%"}
              {...props.value}
            >
            </text>
          )}
        </CountUp>
      </svg>
    </>
  )
}
