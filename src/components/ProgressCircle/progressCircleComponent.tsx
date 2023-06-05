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
  const rootFontSize = window.getComputedStyle(document.documentElement).fontSize.match(/\d+/g)
  const radiusOffset = (rootFontSize ? Number(rootFontSize[0]): 16) * 0.5 

  const getter = (current: any) => {
    const { viewportElement } = current
    const { parentElement: child } = viewportElement
    const targetElement = child.parentElement || child.parentElement?.parentElement || child

    const style = window.getComputedStyle(targetElement)
    const { paddingTop, paddingBottom, paddingLeft, paddingRight } = style

    const width = viewportElement.clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight)
    const height = viewportElement.clientHeight - parseFloat(paddingTop) - parseFloat(paddingBottom)

    return Math.min(width, height)/2 - radiusOffset
  }

  const { ref, prop: radius } = useDim({ getter })
  const circumference = Math.round(radius * 2 * Math.PI)
  const [offset, setOffset] = useState("300%")

  useEffect(() => {
    const progress = (value - minValue) / (maxValue - minValue)
    const offset = (1 - progress) * circumference
    setOffset(`${offset}`)
  }, [radius])

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
              ref={countUpRef}
              x={"50%"}
              y={"50%"}
              {...props.value}
            ></text>
          )}
        </CountUp>
      </svg>
    </>
  )
}
