import React, { useState } from "react"
import { Tooltip } from "@mui/material"
import { mergeDicts } from "../../core/util"
import SvgIcon from "@mui/material/SvgIcon"
import { iDropdown, iDropdownOption } from "./dropdownInterface"
import { useSearch } from "../../hooks"

export const Dropdown = ({
  label,
  options,
  // states
  click,
  point,
  search,
  // functionality addons
  enableSearch = false,
  // events
  onLeave = () => {},
  onMove = () => {},
  onClick = () => {},
  onSearch = () => {},
  // dependency inversion
  DropdownOptionComponent = DropdownOption,
  // props
  props,
}: iDropdown) => {
  // it's essential that name is part of the options since some
  // functionalities like search are dependent on it
  options = options.map((option) => ({
    ...option,
    name: option.name || option.value,
  }))

  const [isOpen, setOpen] = useState(false)
  const [buttonLabel, setButtonLabel] = useState(
    (label ? label : "") + click?.name
  )

  const { filtered } = useSearch(options, { search, column: "name" })

  return (
    <div {...props.dropdown} onClick={() => setOpen(!isOpen)}>
      <div {...props.button}>
        {enableSearch && isOpen ? (
          <input
            _prop-target="label-search"
            placeholder="..."
            {...mergeDicts(props.label, props.search)}
            autoFocus={true}
            value={search}
            onChange={onSearch}
          />
        ) : (
          <div _prop-target="label" {...props.label}>
            {buttonLabel}
          </div>
        )}
        <SvgIcon _prop-target="icon" {...props.icon}>
          <path d="M6 9l6 6 6-6" />
        </SvgIcon>
      </div>

      {isOpen ? (
        <div
          _prop-target="menu"
          {...props.menu}
          onMouseLeave={() => {
            setOpen(false)
            onLeave()
          }}
        >
          {filtered.map((option, index) => {
            const isPointed = option.value === point?.value
            return (
              <DropdownOptionComponent
                key={index}
                isPointed={isPointed}
                option={option}
                onClick={(event: any) => {
                  setOpen(false)
                  onClick(event || {})
                  setButtonLabel(
                    label ? `${label}${event.target.name}` : event.target.name
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
  props: object
}) => {
  const pointOption = mergeDicts(props.option, props.point)
  const element = (
    <a
      _prop-target="option"
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
      _prop-target="tooltip"
      {...props.tooltip}
      arrow
    >
      {element}
    </Tooltip>
  ) : (
    element
  )
}
