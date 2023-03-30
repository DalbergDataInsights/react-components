import { TableComponent } from "./tableComponent"
import { defaults } from "./tableConfig"

export const manifest = {
  name: "Table",
  version: "1.0",
  defaults: defaults,
  Component: TableComponent,
}

export type { iTable, iHeader } from "./tableInterface"
