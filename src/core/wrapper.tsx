import React, { memo, useContext } from "react"

import { useEventManagement } from "./eventManager"
import { useStateListener } from "./stateListener"
import { mergeDicts } from "./util"
import { ComponentContext } from "./context"
import { iWrapper, iReactive } from "./interface"

// try wrapping the init function in the callback to avoid mount spam?
export const Wrapper = ({
  Component,
  defaults,
  name,
  init = ({ subscribers, observers, props }: iReactive) => {},
  subscribers = [],
  observers = [],
  ...props
}: iWrapper & iReactive) => {
  let wrapperDefaults = {
    style: {
      height: "calc(100% - 1rem)",
      width: "calc(100% - 1rem)",
      padding: "0.5rem",
      overflow: "none",
      fontSize: "1rem",
      margin: "0 auto",
    },
  }

  const config = useContext(ComponentContext) // default: {}

  // this handles general case of the props - defaults < theme config < props
  props = mergeDicts(mergeDicts(defaults || {}, config[name] || {}), props)

  // this handles wrapper specific properties defaults < theme config < props
  let containerProps = mergeDicts(wrapperDefaults, config.Wrapper || {})
  containerProps = mergeDicts(containerProps, props.props?.container || {})

  props["controller"] = {}

  init({ subscribers, observers, props })
  useStateListener({ observers, ...props })
  const handlers = useEventManagement({ subscribers })
  return (
    <div {...containerProps} key={props?.key}>
      <Component {...props} {...handlers} />
    </div>
  )
}
