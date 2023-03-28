import React from "react"
import Tooltip from "@mui/material/Tooltip"
import { shadows, styled } from "@mui/system"
import { StatusColor } from "../../components"

const LightTooltip = styled(Tooltip)(({}) => ({
  tooltip: {
    backgroundColor: "darkslategray",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: shadows[1],
    fontSize: 11,
  },
}))

const TextCell = ({ value, ...props }: { value: string | number }) => {
  return <div {...props}>{value}</div>
}

const TextWithTooltip = ({
  value,
  tooltips,
  ...props
}: {
  value: string | number
  tooltips: { [key: string | number]: any }
}) => {
  const element = <div {...props}>{value}</div>

  if (tooltips[value]) {
    return (
      <LightTooltip
        title={<p style={{ fontSize: "1rem" }}>{tooltips[value]}</p>}
        placement="bottom-start"
      >
        {element}
      </LightTooltip>
    )
  }

  return element
}

const StatusCell = ({
  value,
  map,
  ...props
}: {
  value: string
  map: { [key: string]: string }
}) => {
  return (
    <div {...props}>
      <StatusColor
        props={{
          circle: {
            style: {
              borderRadius: "0.5rem",
            },
          },
        }}
        color={map[value] || map["default"]}
      />
    </div>
  )
}

const cellRenderers: { [key: string]: any } = {
  text: TextCell,
  tooltip: TextWithTooltip,
  status: StatusCell,
}

export default cellRenderers
