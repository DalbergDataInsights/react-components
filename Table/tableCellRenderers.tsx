import React from "react"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import { shadows, styled } from "@mui/system"

const LightTooltip = styled(Tooltip)(({}) => ({
  tooltip: {
    backgroundColor: "darkslategray",
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: shadows[1],
    fontSize: 11,
  },
}))

const TextCell = ({ data, ...props }) => {
  return <Typography {...props}>{data}</Typography>
}

const TextWithTooltip = ({ data, tooltips, ...props }) => {
  const element = <Typography {...props}>{data}</Typography>

  if (tooltips[data]) {
    return (
      <LightTooltip
        title={<p style={{ fontSize: "1rem" }}>{tooltips[data]}</p>}
        placement="bottom-start"
      >
        {element}
      </LightTooltip>
    )
  }

  return element
}

const StatusCell = ({
  data,
  map = {
    done: "bg-green-500",
    prog: "bg-yellow-500",
    late: "bg-red-600",
    default: "bg-gray-400",
  },
  size = 4,
  figure = "squared",
  ...props
}) => {
  return (
    <div
      className={`${
        map[data] || map["default"]
      } ${figure}-full w-${size} h-${size}`}
      {...props}
    />
  )
}

const cellRenderers = {
  text: TextCell,
  status: StatusCell,
  tooltip: TextWithTooltip,
}

export default cellRenderers
