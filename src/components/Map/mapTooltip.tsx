import React from "react"
import { mergeDicts } from "../../core/util"

// find a better way to pass variables
export const Tooltip = ({
  renderer = renderTooltip,
  anchor,
  info,
  ...props
}) => {
  if (info) {
    let tooltipProps = mergeDicts(JSON.parse(JSON.stringify(props)), {
      style: anchor,
    })
    return <div {...tooltipProps}>{renderer({ info, ...props })}</div>
  }
}

export const renderTooltip = ({ info, arrow, ...props }) => {
  return (
    <>
      <div {...props.label}>
        <span style={{...props.labelSpan}}>{info.label ? `${info.label}: ` : ""}</span>
        <span style={{...props.valueSpan}}>{info.name || ""} </span>
      </div>
      <div {...props.value}>
        <span style={{...props.labelSpan}}>{info.variable ? `${info.variable}: ` : ""}</span>
        <span style={{...props.valueSpan}}>{info.value ? Math.round(info.value) : "N/A"}
        {info.units ? info.units : ""}
        </span>
      </div>
      {arrow && <span style={{ ...props.arrowStyle }}></span>}
    </>
  )
}
