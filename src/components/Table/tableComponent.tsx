import React from "react"
import { useDim, useSortData } from "../../hooks"

import cellRenderers from "./tableCellRenderers"
import { mergeDicts } from "../../core"
import { iTable, iHeader } from "./tableInterface"

export const TableComponent = ({
  data,
  headers = [],
  displayHeader = true,
  props = {},
}: iTable) => {
  const { ref, prop: headerHeight } = useDim({ getter: (e) => e.offsetHeight })
  const { tooltip: TextWithTooltip } = cellRenderers
  const { sortedData, sortTable, sortConfig, setSortConfig } = useSortData(data)

  const renderSortIcon = (columnIndex) => {
    if (sortConfig && sortConfig.column === columnIndex) {
      const sortIcon = sortConfig.direction === "ascending" ? "↓" : "↑"
      const tooltipText =
        sortConfig.direction === "ascending"
          ? "sort in descending order"
          : "sort in ascending order"
      return (
        <TextWithTooltip
          value={sortIcon}
          tooltips={{ [sortIcon]: tooltipText }}
          {...props.icon}
        />
      )
    }

    return (
      <TextWithTooltip
        value="↕"
        tooltips={{ "↕": "sort in ascending order" }}
        {...props.icon}
      />
    )
  }
  // data: List of lists or list of dictionaries where index of parent list is
  // a row and index of inner list is a column
  // header: list of dictionaries with properties like index, name, hidden, renderer
  // props has table styling, row styling, cell styling, head styling

  // 1. Look into headers, add things that are not in the dictionary.
  // 2. For the dictionary to work we need at least type or renderer, accessor that can be index and a name of the column
  // 3. If the data is dictionary, name is sourced from the data index (either key or array index)
  // Have a dictionary of pre-made cell renderers as well
  // equalize header length
  if (data.length > 0 && headers.length === 0) {
    while (Object.keys(data[0]).length > headers.length) {
      headers.push({})
    }
  }

  // check we have all necessary things for render
  headers.forEach((element: iHeader, index) => {
    element["index"] = element["index"] || Object.keys(data[0])[index] || index
    element["name"] = element["name"] || element["index"]
    element["type"] =
      element["type"] || (element["renderer"] ? "custom" : "text")
    element["renderer"] = element["renderer"] || cellRenderers[element["type"]]
    element["props"] = { ...props.cell, ...(element["props"] || {}) }
    element["hidden"] = element["hidden"] || false
  })

  props["table"]["columns"] = props["table"]["columns"] || headers.length

  return (
    <>
      <div
        _prop-target="rows-headers"
        {...mergeDicts(props.rows, props.headers)}
        ref={ref}
        key={"table-headers"}
      >
        {displayHeader &&
          headers.map((header, index) =>
            header.hidden ? (
              ""
            ) : (
              <div
                _prop-target="row-header-header.props"
                {...mergeDicts(
                  mergeDicts(props.row, props.header),
                  header.props
                )}
                key={`header-${index}`}
              >
                {header.name}
                <span onClick={() => sortTable(header.index)}>
                  {renderSortIcon(header.index)}
                </span>
              </div>
            )
          )}
      </div>
      <div
        _prop-target="table"
        {...mergeDicts(props.table, {
          style: { height: `calc(100% - ${headerHeight}px)` },
        })}
        key={"table"}
      >
        {sortedData.map((row, index) => (
          <div {...props.rows} key={`rows-${index}`} _prop-target="rows">
            {headers.map((header, index) =>
              header.hidden ? (
                ""
              ) : (
                <header.renderer
                  _prop-target="row-header.props"
                  {...mergeDicts(props.row, header.props)}
                  value={row[header.index]}
                  key={`row-${index}`}
                />
              )
            )}
          </div>
        ))}
      </div>
    </>
  )
}
