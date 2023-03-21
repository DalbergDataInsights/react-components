import React from "react"
import { mergeDicts } from "../../core/util"

interface iTooltip {
  renderer: React.FC<iTooltipRenderer>
  anchor: {}
  info: {}
  pointer?: {}
}

interface iTooltipRenderer {
  info: Record<string|number, any>
  props?: any
}


// find a better way to pass variables
export const Tooltip = ({
  renderer = renderTooltip,
  anchor,
  info,
  ...props
}: iTooltip) => {
  if (info) {
    let tooltipProps = mergeDicts(JSON.parse(JSON.stringify(props)), {
      style: anchor,
    })

    return <div {...tooltipProps}>{renderer({ info, props })}</div>
  }
}

// pointer
export const Pointer = ({ props }: { props: any }) => {
  return <span {...props}></span>
}

export const renderTooltip = ({
  info,
  props,
}: iTooltipRenderer): JSX.Element => {
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
      <Pointer props={props.pointer} />
    </>
  )
}
