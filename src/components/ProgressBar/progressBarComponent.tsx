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
          {...mergeDicts(
            {
              style: {
                width: `${progress}%`,
                backgroundColor: color,
              },
            },
            { ...props.progress }
          )}
        >
          <div {...props.pointer}></div>
        </div>
      </div>
      <div {...props.labels}>
        <div {...mergeDicts({ style: {} }, props.label)}>
          {minValue}
          {suffix}
        </div>
        <div
          {...mergeDicts(
            {
              style: {
                width: `calc(${progress}% - 0.5rem)`,
              },
            },
            props.label
          )}
        >
          <CountUp start={minValue} end={value} duration={3} suffix={suffix} />
        </div>
        <div {...mergeDicts({ style: { float: "right" } }, props.value)}>
          {maxValue}
          {suffix}
        </div>
      </div>
    </div>
  )
}
