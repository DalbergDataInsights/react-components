import React from "react"
import { mergeDicts } from "../../core/util"
import { iToggleButtonGroup } from "./toggleButtonGroupInterface"

export const ToggleButtonGroup = ({
  options,
  //states
  click,
  point,
  // events
  onMove,
  onClick,
  // props
  props,
}: iToggleButtonGroup) => {
  function isClicked(element) {
    return element.value === click?.value
  }
  function isPointed(element) {
    return element.value === point?.value
  }

  const clickStyle = mergeDicts(props.click, props.button)
  const pointStyle = mergeDicts(props.point, props.button)

  return (
    <div {...props.group} onMouseMove={onMove} onClick={onClick}>
      {options.map((element) => (
        <button
          key={element.name}
          {...(isClicked(element)
            ? clickStyle
            : isPointed(element)
            ? pointStyle
            : props.button)}
          {...element}
        >
          {element.name ? element.name : element.value}
        </button>
      ))}
    </div>
  )
}
