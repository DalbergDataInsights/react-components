export interface iHeader {
  index?: number | string
  name?: string | number
  type?: string
  renderer?: () => JSX.Element
  props?: Object
  hidden?: boolean
}

export interface iTable {
  data: {}[] | (number[] | string[])[]
  headers?: iHeader[]
  displayHeader?: boolean
  props?: { head: {}; cell: {}; row: {} } & any
}
