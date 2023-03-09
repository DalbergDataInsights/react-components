export interface iDropdown {
  label: string
  options: iDropdownOption[]
  DropdownOptionComponent: Function
  click?: iDropdownOption
  point?: iDropdownOption
  onMove?: Function
  onClick?: Function
  props?: any
}

export interface iDropdownOption {
  value: string
  selected: boolean
  label?: string
  name?: string
  tooltip?: string
}
