import React, { useState, useEffect } from "react"
import { iDonutChart } from "./donutchartInterface"
import CountUp from "react-countup"
import { useDim } from "../../hooks/useDim"
// TODO
// 1. Move the background color to props
// 2. Move most of the props to the config
// 3. Fix the interface
// 4. Make sure responsive values are solid
// 5. Props passthrough setup
// 6. Rename the component to ProgressCircle to stay consistent with progressbar
export const DonutChartComponent = ({
  value,
  color = "#D1D1D6",
  minValue = 0,
  maxValue = 100,
  suffix = "%",
  props,
}: iDonutChart) => {
  const { ref, prop: radius } = useDim({ getter: (c) => c.r.baseVal.value })
  const circumference = Math.round(radius * 2 * Math.PI)
  const [offset, setOffset] = useState("300%")

  useEffect(() => {
    const progress = (value - minValue) / maxValue
    const offset = (1 - progress) * circumference
    setOffset(`${offset}`)
  }, [radius])

  // move this to defaults!
  const cirlceOneStroke = "#E5E5EA"

  return (
    // get rid of this div because you have a wrapper anyway?
    <div style={{ width: "100%", height: "100%" }}>
      {/* props.circle */}
      <svg width={"100%"} height={"100%"} {...props}>
        {/* props.total */}
        <circle
          stroke={cirlceOneStroke}
          cx={"50%"}
          cy={"50%"}
          r={"calc(50% - 0.5rem)"}
          fill="transparent"
          strokeWidth={"1rem"}
          strokeLinecap="round"
          ref={ref}
        />
        {/* props.progress */}
        <circle
          stroke={color}
          cx={"50%"}
          cy={"50%"}
          r={"calc(50% - 0.5rem)"}
          fill="transparent"
          strokeWidth={"1rem"}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 3s",
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>
      <div
        // props.value
        style={{
          position: "absolute",
          top: "calc(50% - 0.5rem)",
          textAlign: "center",
          left: `calc(50% - ${0.25 * (value.toString().length + 1)}rem)`,
          color: "black",
          fontSize: "0.8rem",
          lineHeight: "1rem",
        }}
      >
        <CountUp start={minValue} end={value} duration={3} suffix={suffix} />
      </div>
    </div>
  )
}
