import React from "react"
import Grid from "@mui/material/Grid"

import cellRenderers from "./tableCellRenderers"

export interface iHeader {
  index?: number | string
  name?: string | number
  type?: string
  renderer?: React.ReactNode
  props?: Object
  hidden?: boolean
}

export interface iTable {
  data: Array<Object>
  header?: Array<iHeader>
  displayHeader?: boolean
  props?: any
}

export const TableComponent = ({
  data,
  header = [],
  displayHeader = true,
  props = {},
}: iTable) => {
  // data: List of lists or list of dictionaries where index of parent list is
  // a row and index of inner list is a column
  // header: list of dictionaries with properties like index, name, hidden, renderer
  // props has table styling, row styling, cell styling, head styling

  // 1. Look into headers, add things that are not in the dictionary.
  // 2. For the dictionary to work we need at least type or renderer, accessor that can be index and a name of the column
  // 3. If the data is dictionary, name is sourced from the data index (either key or array index)
  // Have a dictionary of pre-made cell renderers as well
  if (data.length < 1) return <div>Pas de données disponibles</div>
  // equalise header length
  if (data.length > 0 && header.length === 0) {
    while (Object.keys(data[0]).length > header.length) {
      header.push({})
    }
  }

  // check we have all necessary things for render
  header.forEach((element: iHeader, index) => {
    element["index"] = element["index"] || Object.keys(data[0])[index] || index
    element["name"] = element["name"] || element["index"]
    element["type"] =
      element["type"] || (element["renderer"] ? "custom" : "text")
    element["renderer"] = element["renderer"] || cellRenderers[element["type"]]
    element["props"] = { ...props.cell, ...(element["props"] || {}) }
    element["hidden"] = element["hidden"] || false
  })

  props["table"]["columns"] = props["table"]["columns"] || header.length

  return (
    <Grid container {...props.table}>
      {displayHeader &&
        header.map((head) =>
          head.hidden ? (
            ""
          ) : (
            <Grid {...props.head} item xs={head.props.xs}>
              <div>{head.hidden ? "" : <p>{head.name}</p>}</div>
            </Grid>
          )
        )}
      {data.map((row) =>
        header.map((cell) =>
          cell.hidden ? (
            ""
          ) : (
            <Grid item {...props.row} xs={cell.props.xs} key={cell.index}>
              <cell.renderer data={row[cell.index]} {...cell.props} />
            </Grid>
          )
        )
      )}
    </Grid>
  )
}
