import { checkState } from "../../core/util"
import { iReactive } from "../../core/interface"

export function useDropdown({
  subscribers = [],
  observers = [],
  props = {},
}: iReactive) {
  checkState(
    "click",
    props,
    props.options.filter((o: any) => o.selected)[0] || {}
  )
  checkState("point", props)
  checkState("search", props, "")

  subscribers.unshift({
    on: "search",
    func: (event) => {
      props["setSearch"](event.target.value)
    },
  })

  subscribers.unshift({
    on: "click",
    func: (event) => {
      props["setClick"](getInfo(event))
      props["setSearch"]("")
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

function getInfo(event: any) {
  return {
    name: event.target.name,
    value: event.target.value || event.target.attributes.value?.value,
    group: event.target.group || event.target.attributes.group?.value,
  }
}
