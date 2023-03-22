import React, { useState, useEffect } from "react"
import { iProgressCircle } from "./progressCircleInterface"
import CountUp from "react-countup"
import { useDim } from "../../hooks/useDim"
// TODO
// 1. Move the background color to props
// 2. Move most of the props to the config
// 3. Fix the interface
// 4. Make sure responsive values are solid
// 5. Props passthrough setup
// 6. Rename the component to ProgressCircle to stay consistent with progressbar
// 7. rename label into value on the probs to stay consistent with other component - on the progress bar too
export const ProgressCircleComponent = ({
  value,
  color = "#D1D1D6",
  minValue = 0,
  maxValue = 100,
  suffix = "%",
  props,
}: iProgressCircle) => {
  const { ref, prop: radius } = useDim({ getter: (c) => c.r.baseVal.value })
  const circumference = Math.round(radius * 2 * Math.PI)
  const [offset, setOffset] = useState("300%")

  useEffect(() => {
    const progress = (value - minValue) / maxValue
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
          r={"calc(50% - 0.5rem)"}
          ref={ref}
        />
        <circle
          {...props.progress}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          cx={"50%"}
          cy={"50%"}
          r={"calc(50% - 0.5rem)"}
        />
      </svg>
      <div
        {...props.value}
        style={{
          ...{
            position: "absolute",
            top: "calc(50% - 0.5rem)",
            left: `calc(50% - ${0.25 * (value.toString().length + 1)}rem)`,
            textAlign: "center",
          },
          ...props.value.style,
        }}
      >
        <CountUp start={minValue} end={value} duration={3} suffix={suffix} />
      </div>
    </>
  )
}
