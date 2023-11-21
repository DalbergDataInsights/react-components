import React from "react"
import { mergeDicts } from "../../core/util"

interface iTooltip {
  renderer: React.FC<iTooltipRenderer>
  anchor: {}
  info: {}
  pointer?: {}
}

interface iTooltipRenderer {
  info: Record<string | number, any>
  props?: any
}

// find a better way to pass variables
export const Tooltip = ({
  renderer = renderTooltip,
  anchor,
  info,
  ...props
}: iTooltip): JSX.Element => {
  if (info) {
    let tooltipProps = mergeDicts(JSON.parse(JSON.stringify(props)), {
      style: anchor,
    })

    return <div {...tooltipProps}>{renderer({ info, props })}</div>
  }
  return <></>
}

export const renderTooltip = ({
  info,
  props,
}: iTooltipRenderer): JSX.Element => {
  return (
    <>
      <div {...props.title}>{info.title}</div>
      {info.customTooltipData &&
      Object.keys(JSON.parse(info.customTooltipData)).length > 0 ? (
        Object.entries(JSON.parse(info.customTooltipData)).map(
          ([key, value]) => {
            return (
              <div {...props.content}>
                <div {...props.label}>{`${key}:` || ""}</div>
                <div {...props.value}>{value || ""}</div>
              </div>
            )
          }
        )
      ) : (
        <>
          <div {...props.content}>
            <div {...props.label}>{info.label ? `${info.label}: ` : ""}</div>
            <div {...props.value}>{info.name || ""}</div>
          </div>
          <div {...props.content}>
            <div {...props.label}>
              {info.variable ? `${info.variable}: ` : ""}
            </div>
            <div {...props.value}>
              {Math.round(info.value) || "N/A"}
              {info.units || ""}
            </div>
          </div>
        </>
      )}
      <span {...props.pointer}></span>
    </>
  )
}
