import React, { useContext } from "react"

import { useEventManagement, iSubscriber } from "./eventManager"
import { useStateListener, iObserver } from "./stateListener"
import { mergeDicts } from "./util"
import { ComponentContext } from "./context"

const wrapperDefaults = {
  style: {
    height: "100%",
    width: "100%",
  },
}

export const Wrapper = ({
  Component,
  defaults,
  name,
  init = () => {},
  subscribers = [],
  observers = [],
  ...props
}) => {
  const config = useContext(ComponentContext) // default: {}
  props = mergeDicts(
    props,
    mergeDicts(JSON.parse(JSON.stringify(config[name])), defaults) // 2 left joins component props & application config & default
  )
  props.container = mergeDicts(
    props.container || {},
    mergeDicts(config.container || {}, wrapperDefaults)
  )
  init(subscribers, observers, props)
  useStateListener({ observers, ...props })
  const handlers = useEventManagement({ subscribers })
  return (
    <div {...props.container}>
      <Component {...props} {...handlers} />
    </div>
  )
}
