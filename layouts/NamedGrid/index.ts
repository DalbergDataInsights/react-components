import { NamedGridLayout } from "./namedGridComponent"

export type { iNamedGrid } from "./namedGridInterface"
export const manifest = {
  name: "NamedGrid",
  version: "0.1",
  defaults: {
    style: {
      overflow: "hidden",
      height: "100%",
      margin: "auto",
      gap: "8px",
    },
  },
  Component: NamedGridLayout,
}
