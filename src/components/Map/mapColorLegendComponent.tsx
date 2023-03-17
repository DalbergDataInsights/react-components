import React, { memo } from "react"
import { mergeDicts } from "../../core/util"
import { iMapColorLegend } from "./mapInterface"

export const ColorLegendComponent = ({
  colors = [],
  steps = [],
  suffix = " ",
  props,
  naColor = "#6C6C6D",
  naText = "n.d",
  borderRadius = "2rem",
}: iMapColorLegend) => {
  colors = steps.length > 1 ? colors.slice(1, steps.length - 1) : colors

  return (
    <div {...props.legend}>
      <div {...props.colors}>
        <div {...props.empty}></div>
        <div
          {...mergeDicts(
            {
              style: {
                backgroundColor: naColor,
                borderRadius: `${borderRadius} 0 0 ${borderRadius}`,
              },
            },
            props.color
          )}
        ></div>
        {colors &&
          colors.map((color, index) => (
            <div
              key={color}
              {...mergeDicts(
                {
                  style: {
                    backgroundColor: color,
                    borderRadius:
                      index === colors.length - 1
                        ? `0 ${borderRadius} ${borderRadius} 0`
                        : "0",
                  },
                },
                props.color
              )}
            ></div>
          ))}
        <div {...props.empty}></div>
      </div>
      <div {...props.steps}>
        <div {...props.step}>{naText}</div>
        {steps &&
          steps.map((step) => (
            <div {...props.step} key={step}>{`${step}${suffix}`}</div>
          ))}
      </div>
    </div>
  )
}
