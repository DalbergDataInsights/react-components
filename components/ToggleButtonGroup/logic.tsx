import { checkState } from "../../core/util"

export const useToggleButtonGroup = (subscribers, observers, props) => {
  // adding states
  checkState("point", props)
  checkState("click", props)
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
    props["setClick"](props.options.filter((e) => e.selected)[0] || {})
  }
}

function getEventInfo(event) {
  return {
    name: event.target.name,
    value: event.target.value,
  }
}
