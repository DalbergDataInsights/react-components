import React, {memo} from "react"
import { defaults } from "./colorLegendConfig"

export interface iColorLegend {
  colors?: string[]
  steps: string[] | number[]
  suffix?: string
  title?: string
  props?: any
}

const ColorLegendComponent = ({
  colors = [],
  steps = [],
  suffix = " ",
  title = "",
  props,
}: iColorLegend) => {
  colors = steps.length > 1 ? colors.slice(0, steps.length - 1) : colors
  props = {...defaults.props, ...props}

  return (
    <div {...props.legend}>
      <div {...props.title}>{title}</div>
      <div {...props.scale}>
        <ul {...props.ul}>
          <li {...props.label}>
            <span
              {...props.span}
              style={{
                backgroundColor: "#6C6C6D",
                ...props.span.style,
                ...props.firstSpan,
              }}
            ></span>
            {steps.length > 1 && "n.d"}
          </li>
          {colors &&
            colors.map((color, index) => {
              const style =
                index === colors.length - 1
                  ? { ...props.span.style, ...props.secondLastSpan }
                  : { ...props.span.style }
              return (
                <li key={index} {...props.label}>
                  <span
                    {...props.span}
                    style={{ backgroundColor: color, ...style }}
                  ></span>
                  {steps[index]}
                  {suffix}
                </li>
              )
            })}
          <li {...props.label}>
            <span {...props.span}></span>
            {steps[steps.length - 1]}
            {suffix}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default memo(ColorLegendComponent, () => false)