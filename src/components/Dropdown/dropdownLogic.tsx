import { checkState } from "../../core/util"
import { iReactive } from "../../core/interface"

export function useDropdown({
  subscribers = [],
  observers = [],
  props = {},
}: iReactive) {
  checkState("click", props, props.options.filter((o) => o.selected)[0] || {})
  checkState("point", props)

  subscribers.unshift({
    on: "click",
    func: (event) => {
      props["setClick"](getInfo(event))
    },
  })

  subscribers.unshift({
    on: "move",
    func: (event) => {
      const info = getInfo(event)
      if (props["point"]?.value !== info.value) {
        props["setPoint"](info)
      }
    },
  })
}

function getInfo(event) {
  return {
    name: event.target.name,
    value: event.target.value || event.target.attributes.value?.value,
    group: event.target.group || event.target.attributes.group?.value,
  }
}
