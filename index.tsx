// export * from "./PieChart/ChartJS"
// export * from "./PieChart/Recharts"
export * from "./DropDown"
export * from "./context"
// export * from "./Button"
// export * from "./Table"

import { Wrapper } from "./wrapper"
import { manifest } from "./manifest"
import { ReactPropTypes } from "react"

export const Table = (props: ReactPropTypes) => (
  <Wrapper {...manifest["Table"]} {...props} />
)
