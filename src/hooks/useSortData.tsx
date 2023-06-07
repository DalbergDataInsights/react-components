import React, { useState } from "react"

export const useSortData = (
  initialData: any[],
  customSortFunction: Function
) => {
  const [sortedData, setSortedData] = useState<any[]>(initialData)
  const [sortConfig, setSortConfig] = useState<any | null>(null)

  const sortTable = (column: string) => {
    let direction = "ascending"

    if (sortConfig && sortConfig.column === column) {
      direction =
        sortConfig.direction === "ascending" ? "descending" : "ascending"
    }
    let sortedDataCopy = [...sortedData]
    sortedDataCopy.sort((a, b) => {
      return customSortFunction(a[column], b[column], direction)
    })

    setSortedData(sortedDataCopy)
    setSortConfig({ column, direction })
  }

  return { sortedData, sortTable, sortConfig, setSortConfig }
}
