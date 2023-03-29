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
  naProgress = "Données non disponibles",
  props,
}: iProgressBar) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (value == undefined || value == null || isNaN(value)) {
      setProgress(null)
    } else {
      setProgress(((value - minValue) / maxValue) * 100)
    }
  }, [])

  return (
    <div _prop-target="bar" {...props.bar}>
      <div _prop-target="total" {...props.total}>
        {progress === null ? (
          <div _prop-target="naProgress" {...props.naProgress}>
            {naProgress}
          </div>
        ) : (
          <div
            _prop-target="*progress"
            {...mergeDicts(props.progress, {
              style: {
                width: `${progress}%`,
                backgroundColor: color,
              },
            })}
          >
            <div _prop-target="pointer" {...props.pointer}></div>
          </div>
        )}
      </div>
      <div _prop-target="labels" {...props.labels}>
        <div _prop-target="label" {...props.label}>
          {minValue}
          {suffix}
        </div>
        <div
          _prop-target="value"
          {...mergeDicts(props.value, {
            style: {
              width: `calc(${progress}% - 0.5rem)`,
            },
          })}
        >
          {progress !== null && (
            <CountUp
              _prop-target="counter"
              {...props.counter}
              start={minValue}
              end={value}
              suffix={suffix}
            />
          )}
        </div>
        <div
          _prop-target="label"
          {...mergeDicts(props.label, { style: { float: "right" } })}
        >
          {maxValue}
          {suffix}
        </div>
      </div>
    </div>
  )
}
