import React, { useState, useEffect } from "react"

export const useSort = (
  data: object[],
  { column = undefined, sortFn = "flex", ascending = true }
) => {
  const [sorted, setSorted] = useState<object[]>(data)

  useEffect(() => {
    const sortedData = [...data]

    if (ascending !== undefined) {
      sortedData.sort((a, b) => {
        const fn = SORTS[sortFn] || sortFn
        let sortResult = fn(column ? a[column] : a, column ? b[column] : b)
        if (!ascending) {
          sortResult = -sortResult
        }
        return sortResult
      })
    }

    setSorted(sortedData)
  }, [data, ascending, sortFn, column])

  return { sorted, ascending }
}

const SORTS = {
  flex: flexSort,
  num: numSort,
}

function numSort(a, b) {
  return a - b
}

function flexSort(a, b) {
  if (a == b) return 0
  return a > b ? 1 : -1
}
