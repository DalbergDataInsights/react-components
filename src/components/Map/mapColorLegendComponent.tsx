import React, { memo } from "react"
import { mergeDicts } from "../../core/util"
import { iMapColorLegend } from "./mapInterface"

export const ColorLegendComponent = ({
  colors = [],
  steps = [],
  suffix = "%",
  props,
  naColor = "#6C6C6D",
  naText = "n.d",
  borderRadius = "2rem",
  borderSteps = ["-inf", "inf"],
  showBorderColors = false,
}: iMapColorLegend) => {

  const newSteps = [...steps]

  if (showBorderColors) {
    newSteps.unshift(borderSteps[0])
    newSteps.push(borderSteps[1])
    colors = steps.length > 1 ? colors.slice(0, steps.length + 1) : colors
  } else {
    colors = steps.length > 1 ? colors.slice(1, steps.length) : colors
  }

  return (
    <div _prop-target="legend" {...props.legend}>
      <div _prop-target="colors" {...props.colors}>
        <div _prop-target="empty" {...props.empty}></div>
        <div
          _prop-target="color"
          {...mergeDicts(props.color, {
            style: {
              backgroundColor: naColor,
              borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
            },
          })}
        ></div>
        {colors &&
          colors.map((color, index) => (
            <div
              _prop-target="color"
              key={color}
              {...mergeDicts(props.color, {
                style: {
                  backgroundColor: color,
                  borderRadius:
                    index === colors.length - 1
                      ? `0 ${borderRadius} ${borderRadius} 0`
                      : "0",
                },
              })}
            ></div>
          ))}
        <div _prop-target="empty" {...props.empty}></div>
      </div>
      <div _prop-target="steps" {...props.steps}>
        <div _prop-target="step" {...props.step}>
          {naText}
        </div>
        {newSteps &&
          newSteps.map((step) => (
            <div _prop-target="step" {...props.step} key={step}>
              {`${step}${
                borderSteps.some((label) => step === label) ? "" : suffix
              }`}
            </div>
          ))}
      </div>
    </div>
  )
}
