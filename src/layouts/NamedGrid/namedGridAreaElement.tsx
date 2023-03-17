import { iNamedGridArea } from "./namedGridAreaElementInterface"

export const NamedGridArea = ({
  area,
  children,
  color = "white",
  style,
}: iNamedGridArea) => {
  return (
    <div
      style={{
        gridArea: area,
        backgroundColor: color,
        height: "100%",
        width: "100%",
        overflow: "auto",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
