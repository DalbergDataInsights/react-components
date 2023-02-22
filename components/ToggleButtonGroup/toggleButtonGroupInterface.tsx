export interface iToggleButtonGroup {
  options: iToggleButtonGroupOption[]
  click?: iToggleButtonGroupOption
  point?: iToggleButtonGroupOption
  onMove?: Function
  onClick?: Function
  props?: any
}

export interface iToggleButtonGroupOption {
  value: string
  name?: string
  selected?: boolean
}
