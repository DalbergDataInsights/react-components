import { checkState } from "../../core/util"

export function useDropdown(subscribers, observers, props) {
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

  // subscribers.unshift({
  //   on: "change",
  //   func: (event) => {
  //     props["setClick"](getInfo(event))
  //   },
  // })
}

function getInfo(event) {
  return {
    name: event.target.name,
    value: event.target.value || event.target.attributes.value?.value,
    group: event.target.group || event.target.attributes.group?.value,
  }
}
