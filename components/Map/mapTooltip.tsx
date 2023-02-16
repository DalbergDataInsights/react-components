import React from "react"
import { mergeDicts } from "../../core/util"

export const Tooltip = ({
  renderer = renderTooltip,
  anchor,
  info,
  ...props
}) => {
  if (info) {
    let tooltipProps = mergeDicts({ style: anchor }, props.tooltip)
    return <div {...tooltipProps}>{renderer({ info, ...props })}</div>
  }
}

export const renderTooltip = ({ info, ...props }) => {
  return (
    <>
      <div {...props.label}>
        {info.label ? `${info.label}: ` : ""}
        {info.name || ""}
      </div>
      <div {...props.value}>
        {info.variable ? `${info.variable}: ` : ""}
        {info.value ? Math.round(info.value) : "N/A"}
        {info.units ? info.units : ""}
      </div>
    </>
  )
}
