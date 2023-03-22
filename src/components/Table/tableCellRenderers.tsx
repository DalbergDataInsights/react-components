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

const TextCell = ({ data, ...props }: { data: string | number }) => {
  return <Typography {...props}>{data}</Typography>
}

const TextWithTooltip = ({
  data,
  tooltips,
  ...props
}: {
  data: string | number
  tooltips: { [key: string | number]: any }
}) => {
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

const cellRenderers: { [key: string]: any } = {
  text: TextCell,
  tooltip: TextWithTooltip,
}

export default cellRenderers
