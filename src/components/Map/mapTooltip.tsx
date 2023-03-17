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
      <div>
        <span {...props.label}>{info.label ? `${info.label}: ` : ""}</span>
        <span {...props.value}>{info.name || ""} </span>
      </div>
      <div>
        <span {...props.label}>{info.variable ? `${info.variable}: ` : ""}</span>
        <span {...props.value}>{info.value ? Math.round(info.value) : "N/A"}
        {info.units ? info.units : ""}
        </span>
      </div>
      {type === "point" && <span { ...props.arrow }></span>}
    </>
  )
}
