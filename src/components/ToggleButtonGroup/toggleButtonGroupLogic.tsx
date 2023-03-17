import { checkState } from "../../core"
import { iReactive } from "../../core"
import { iToggleButtonGroupOption } from "./toggleButtonGroupInterface"

export const useToggleButtonGroup = ({
  subscribers = [],
  observers = [],
  props = {},
}: iReactive) => {
  // adding states
  checkState("point", props)
  checkState(
    "click",
    props,
    props.options.filter((o: iToggleButtonGroupOption) => o.selected)[0] || {}
  )
  // adding onMove sub
  subscribers.unshift({
    on: "move",
    func: (event) => {
      const info = getEventInfo(event)
      if (info?.value != props.point?.value) {
        props["setPoint"](info)
      }
    },
  })

  subscribers.unshift({
    on: "click",
    func: (event) => {
      const info = getEventInfo(event)
      if (info.value) {
        props["setClick"](info)
      }
    },
  })

  if (!props["click"]) {
    props["setClick"](
      props.options.filter((e: iToggleButtonGroupOption) => e.selected)[0] || {}
    )
  }
}

function getEventInfo(event: any) {
  return {
    name: event.target.name,
    value: event.target.value,
  }
}
