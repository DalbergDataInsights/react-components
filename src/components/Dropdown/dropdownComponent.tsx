import React, { useState } from "react"
import { Tooltip } from "@mui/material"
import { mergeDicts } from "../../core/util"
import SvgIcon from "@mui/material/SvgIcon"
import { iDropdown, iDropdownOption } from "./dropdownInterface"

export const Dropdown = ({
  label,
  options,
  // states
  click,
  point,
  // events
  onMove,
  onClick,
  // props
  // dependency inversion
  DropdownOptionComponent = DropdownOption,
  props,
}: iDropdown) => {
  const [isOpen, setOpen] = useState(false)
  const [buttonLabel, setButtonLabel] = useState(
    (label ? label : "") + click.name || click.value
  )

  return (
    <div {...props.dropdown} onClick={() => setOpen(!isOpen)}>
      <div {...props.button}>
        <div {...props.label}>{buttonLabel}</div>
        <SvgIcon {...props.icon}>
          <path d="M6 9l6 6 6-6" />
        </SvgIcon>
      </div>

      {isOpen ? (
        <div {...props.menu} onMouseLeave={() => setOpen(false)}>
          {options.map((option, index) => {
            const isPointed = option.value === point?.value
            return (
              <DropdownOptionComponent
                key={index}
                isPointed={isPointed}
                option={option}
                onClick={(event) => {
                  setOpen(false)
                  onClick(event)
                  setButtonLabel(
                    label ? `${label}${event.target.name}` : event.taget.name
                  )
                }}
                onMove={onMove}
                props={props}
              />
            )
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export const DropdownOption = ({
  isPointed,
  option,
  onClick,
  onMove,
  props,
}: {
  isPointed: boolean
  option: iDropdownOption
  onClick: Function
  onMove: Function
  props: any
}) => {
  const pointOption = mergeDicts(props.point, props.option)
  const element = (
    <a
      onClick={onClick}
      onMouseMove={onMove}
      key={option.value}
      role="menuitem"
      {...(isPointed ? pointOption : props.option)}
      {...option}
    >
      {option.label ? `${option.label}` : ""}
      {option.name || option.value}
    </a>
  )
  return option.tooltip ? (
    <Tooltip
      title={option.tooltip}
      placement={"right-end"}
      {...props.tooltip}
      arrow
    >
      {element}
    </Tooltip>
  ) : (
    element
  )
}
