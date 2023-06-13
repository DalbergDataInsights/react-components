export interface iDropdown {
  options: iDropdownOption[]
  label?: string
  enableSearch?: boolean
  DropdownOptionComponent?: Element
  click?: iDropdownOption
  point?: iDropdownOption
  search?: string
  onMove?: (event: object) => void
  onClick?: (event: object) => void
  onSearch?: (event: object) => void
  onLeave?: (event: object) => void
  props?: object
}

export interface iDropdownOption {
  value: string
  selected?: boolean
  label?: string
  name?: string
  tooltip?: string
}
