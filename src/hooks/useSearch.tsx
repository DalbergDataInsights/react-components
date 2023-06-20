import React, { useState, useEffect } from "react"

export const useSearch = (
  data: object[],
  { column = "", search = "", searchFn = "flex" }
) => {
  const [filtered, setFiltered] = useState<object[]>(data)

  useEffect(() => {
    let filteredData = [...data]

    if (column !== undefined) {
      filteredData = filteredData.filter((row) => {
        const fn = SEARCHES[searchFn] || searchFn
        return fn(row, column, search)
      })
    }
    setFiltered(filteredData)
  }, [search, searchFn, column])

  return { filtered }
}

const SEARCHES = {
  flex: flexSearch,
  exact: exactSearch,
}

function flexSearch(row, column, value) {
  return row[column].toLowerCase().includes(value.toLowerCase())
}

function exactSearch(row, column, value) {
  return row[column] === value
}
