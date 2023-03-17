import React, { memo } from "react"
import { defaults } from "./colorLegendConfig"
import { mergeDicts } from "../../core/util"

export interface iColorLegend {
  colors?: string[]
  labels: Array<any>
  suffix?: string
  title?: string
  props?: any
  colorNA?: string
}

const ColorLegendComponent = ({
  colors = [],
  labels = [],
  suffix = " ",
  title = "",
  props,
  colorNA = "#6C6C6D",
}: iColorLegend) => {
  colors = labels.length > 1 ? colors.slice(0, labels.length - 1) : colors
  props = mergeDicts(JSON.parse(JSON.stringify(defaults.props)), props)

  // COLOR NA styling
  const colorNAStyle = mergeDicts(JSON.parse(JSON.stringify(props.colorNA)), {
    style: {
      backgroundColor: colorNA,
      borderTopRightRadius: colors.length === 0 ? "0.5rem" : "",
      borderBottomRightRadius: colors.length === 0 ? "0.5rem" : "",
    },
  })

  console.log(colorNAStyle)
  return (
    <div {...props.legend}>
      <div {...props.scale}>
        <div {...props.empty}></div>
        <div {...colorNAStyle}></div>
        {colors &&
          colors.map((color, index) => {
            const borderStyle =
              index === colors.length - 1
                ? {
                    borderTopRightRadius: "0.5rem",
                    borderBottomRightRadius: "0.5rem",
                  }
                : {}
            return (
              <div
                style={{ backgroundColor: color, flexGrow: 2, ...borderStyle }}
              ></div>
            )
          })}
        <div {...props.empty}></div>
      </div>
      <div {...props.scale}>
        <div {...props.label}>n.d</div>
        {labels &&
          labels.map((label) => (
            <div {...props.label}>
              {label}
              {suffix}
            </div>
          ))}
      </div>
      {title && <div {...props.title}>{title}</div>}
    </div>
  )
}

export default memo(ColorLegendComponent, () => false)
