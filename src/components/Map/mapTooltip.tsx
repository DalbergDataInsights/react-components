import React from "react"
import { mergeDicts } from "../../core/util"

// find a better way to pass variables
export const Tooltip = ({
  renderer = renderTooltip,
  anchor,
  info,
  type,
  ...props
}) => {
  if (info) {
    let tooltipProps = mergeDicts(JSON.parse(JSON.stringify(props.container)), {
      style: anchor,
    })
    return <div {...tooltipProps}>{renderer({ info, type, ...props })}</div>
  }
}

export const renderTooltip = ({ info, type, ...props }) => {
  return (
    <>
      <div {...props.label}>
        <div>{info.label ? `${info.label}: ` : ""}</div>
        <div>{info.variable ? `${info.variable}: ` : ""}</div>
      </div>
      <div {...props.value}>
        <div>{info.name || ""}</div>
        <div>
          {info.value ? Math.round(info.value) : "N/A"}
          {info.units ? info.units : ""}
        </div>
      </div>
      {type === "point" && <span {...props.arrow}></span>}
    </>
  )
}
