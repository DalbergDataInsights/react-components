import React, { memo } from "react"
import { defaults } from "./colorLegendConfig"
import { mergeDicts } from "../../core/util"

export interface iColorLegend {
  colors: string[]
  steps: Array<any>
  suffix?: string
  title?: string
  naColor?: string
  props?: any
  naText?: string
  borderRadius?: string | number
}

const ColorLegendComponent = ({
  colors = [],
  steps = [],
  suffix = " ",
  title = "",
  props,
  naColor = "#6C6C6D",
  naText = "n.d",
  borderRadius = "2rem"
}: iColorLegend) => {
  colors = steps.length > 1 ? colors.slice(1, steps.length - 1) : colors
  props = mergeDicts(defaults.props, props)

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
              {...mergeDicts(
                {
                  style: {
                    backgroundColor: color,
                    borderRadius:
                      index === colors.length - 1 ? `0 ${borderRadius} ${borderRadius} 0` : "0",
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
          steps.map((step) => <div {...props.step}>{`${step}${suffix}`}</div>)}
      </div>
    </div>
  )
}

export default memo(ColorLegendComponent, () => false)
