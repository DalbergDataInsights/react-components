import React, { useContext, useRef, forwardRef } from "react"

import { useEventManagement, iSubscriber } from "./eventManager"
import { useStateListener, iObserver } from "./stateListener"
import { mergeDicts } from "./util"
import { ComponentContext } from "./context"

const wrapperDefaults = {
  style: {
    height: "calc(100% - 16px)",
    width: "calc(100% - 16px)",
    padding: "8px",
    overflow: "auto",
  },
}
// try wrapping the init function in the callback to avoid mount spam?
export const Wrapper = ({
  Component,
  defaults,
  name,
  init = ([], [], {}) => {},
  subscribers = [],
  observers = [],
  ...props
}) => {
  const config = useContext(ComponentContext) // default: {}
  props = mergeDicts(
    props,
    mergeDicts(JSON.parse(JSON.stringify(config[name] || {})), defaults) // 2 left joins component props & application config & default
  )
  props.container = mergeDicts(
    props.container || {},
    mergeDicts(config.container || {}, wrapperDefaults)
  )
  props["controller"] = {}
  init(subscribers, observers, props)
  useStateListener({ observers, ...props })
  const handlers = useEventManagement({ subscribers })

  return (
    <div {...props.container}>
      <Component {...props} {...handlers} />
    </div>
  )
}
