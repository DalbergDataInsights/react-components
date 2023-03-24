import React, { useEffect, useState } from "react"
import { mergeDicts } from "../../core/util"
import { iProgressBar } from "./progressBarInterface"
import CountUp from "react-countup"

export const ProgressBarComponent = ({
  value,
  color = "#7AA995",
  maxValue = 100,
  minValue = 0,
  suffix = "%",
  props,
}: iProgressBar) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(((value - minValue) / (maxValue - minValue)) * 100)
  }, [])

  return (
    <div {...props.bar}>
      <div {...props.total}>
        <div
          {...mergeDicts(props.progress, {
            style: {
              width: `${progress}%`,
              backgroundColor: color,
            },
          })}
        >
          <div {...props.pointer}></div>
        </div>
      </div>
      <div {...props.labels}>
        <div {...props.label}>
          {minValue}
          {suffix}
        </div>
        <div
          {...mergeDicts(props.value, {
            style: {
              width: `calc(${progress}% - 0.5rem)`,
            },
          })}
        >
          <CountUp
            {...props.counter}
            start={minValue}
            end={value}
            suffix={suffix}
          />
        </div>
        <div {...mergeDicts(props.label, { style: { float: "right" } })}>
          {maxValue}
          {suffix}
        </div>
      </div>
    </div>
  )
}
