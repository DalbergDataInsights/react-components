import React from "react"
import { iNamedGrid } from "./namedGridInterface"

export const NamedGridLayout = ({
  areas,
  columns = [],
  rows = [],
  children,
  style,
}: iNamedGrid) => {
  return (
    <div
      style={{
        ...{
          display: "grid",
          gridTemplateAreas: getGridTeamplateAreasString(areas),
          gridTemplateColumns: columns.join(" "),
          gridTemplateRows: rows.join(" "),
        },
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/**
 *
 * @param areas Array of Arrays [["head", "head", "head"], ["body . viz"]]
 */
function getGridTeamplateAreasString(areas: Array<Array<string>>) {
  const rowTemplateAreas = areas.map((a) => a.join(" "))
  const gridTemplateAreaString = `'${rowTemplateAreas.join("' '")}'`
  return gridTemplateAreaString
}
