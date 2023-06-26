export const dmToCSV = (data) => {
  const sep = ","
  const header = Object.keys(data[0]).join(sep)
  const rows = data.map((row) => Object.values(row).join(sep))
  return [header, ...rows].join("\n")
}

export const handleDownload = async (data, { dtype, getter, name }) => {
  const csvContent = `data:${dtype};charset=utf-8,` + getter(data)
  const encodedUri = encodeURI(csvContent)
  const link = document.createElement("a")
  link.setAttribute("href", encodedUri)
  link.setAttribute("download", `${name}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
