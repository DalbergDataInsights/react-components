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
  function isClicked(element: any) {
    return element.value === click?.value
  }
  function isPointed(element: any) {
    return element.value === point?.value
  }

  const clickStyle = mergeDicts(props.button, props.click)
  const pointStyle = mergeDicts(props.button, props.point)

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
