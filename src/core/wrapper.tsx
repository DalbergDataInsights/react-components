import React, { memo, useContext } from "react"

import { useEventManagement } from "./eventManager"
import { useStateListener } from "./stateListener"
import { mergeDicts } from "./util"
import { ComponentContext } from "./context"
import { iWrapper, iReactive } from "./interface"

const wrapperDefaults = {
  style: {
    height: "calc(100% - 1rem)",
    width: "calc(100% - 1rem)",
    padding: "0.5rem",
    overflow: "none",
    fontSize: "1rem",
  },
}
// try wrapping the init function in the callback to avoid mount spam?
const WrapperComponent = ({
  Component,
  defaults,
  name,
  init = ({ subscribers, observers, props }: iReactive) => {},
  subscribers = [],
  observers = [],
  ...props
}: iWrapper & iReactive) => {
  const config = useContext(ComponentContext) // default: {}

  props = mergeDicts(
    props,
    mergeDicts(JSON.parse(JSON.stringify(config[name] || {})), defaults) // 2 left joins component props & application config & default
  )
  props["container"] = mergeDicts(
    mergeDicts(config.Wrapper || {}, wrapperDefaults),
    props["container"] || {}
  )
  props["controller"] = {}

  init({ subscribers, observers, props })
  useStateListener({ observers, ...props })
  const handlers = useEventManagement({ subscribers })
  return (
    <div {...props["container"]}>
      <Component {...props} {...handlers} />
    </div>
  )
}

export const Wrapper = memo(WrapperComponent, arePropsEqual)

function arePropsEqual(prevProp, newProps) {
  return true
}
