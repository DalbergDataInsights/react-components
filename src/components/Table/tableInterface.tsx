export interface iHeader {
  index?: number | string
  name?: string | number
  type?: string
  renderer?: () => JSX.Element
  sort?: boolean
  sortFn?: () => number | string
  props?: object
  hidden?: boolean
}

export interface iTable {
  data: object[] | (number[] | string[])[]
  sortArgs?: object
  headers?: iHeader[]
  displayHeader?: boolean
  props?: { head: object; cell: object; row: object } & any
}
