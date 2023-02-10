import { TableComponent } from "./tableComponent"
import { defaults } from "./tableConfig"

export const manifest = {
  name: "Table",
  version: "0.1",
  defaults: defaults,
  Component: TableComponent,
}

export type { iTable } from "./tableComponent"
