import React, { useState } from "react"
const PureDropdown = ({
  label,
  options,
  // states
  click,
  point,
  // events
  onMove,
  onClick,
  onChange,
  // props
  props,
}) => {
  const [active, setActive] = useState(click?.value)
  const groups = [...new Set(options.map((option) => option.group))]
  return (
    <label {...props?.label}>
      {label || ""}
      <select
        value={active}
        onChange={(event) => {
          onChange(event)
          setActive(event.target.value)
        }}
        {...props?.select}
      >
        {groups.map((groupname: string) => {
          const optionComponents = options
            .filter((option) => option.group === groupname)
            .map((option) => (
              <option
                onMouseEnter={onMove}
                // onClick={onClick}
                onMouseMove={onMove}
                {...props?.option}
                {...option}
                key={option.value}
                // overwriting some props since we are using the same keyword
                label={undefined}
                selected={undefined}
              >
                {option.label ? `${option.label}` : ""}
                {option.name}
              </option>
            ))
          return groupname ? (
            <optgroup label={groupname} {...props?.group} key={groupname}>
              {optionComponents}
            </optgroup>
          ) : (
            optionComponents
          )
        })}
      </select>
    </label>
  )
}
