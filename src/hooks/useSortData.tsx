import React, { useState } from "react"

export const useSortData = (initialData: any[]) => {
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
      if (a[column] < b[column]) {
        return direction === "ascending" ? -1 : 1
      }
      if (a[column] > b[column]) {
        return direction === "ascending" ? 1 : -1
      }
      return 0
    })

    setSortedData(sortedDataCopy)
    setSortConfig({ column, direction })
  }

  return { sortedData, sortTable, sortConfig, setSortConfig }
}
