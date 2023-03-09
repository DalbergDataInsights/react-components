import React, { memo, useContext, useMemo } from "react"

import { useEventManagement, iSubscriber } from "./eventManager"
import { useStateListener, iObserver } from "./stateListener"
import { mergeDicts, checkState } from "./util"
import { ComponentContext } from "./context"

const wrapperDefaults = {
  style: {
    height: "calc(100% - 16px)",
    width: "calc(100% - 16px)",
    padding: "8px",
    overflow: "auto",
    fontSize: "12pt",
  },
}
// try wrapping the init function in the callback to avoid mount spam?
const WrapperComponent = ({
  Component,
  defaults,
  name,
  init = ([], [], {}) => {},
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
    props["container"] || {},
    mergeDicts(config.container || {}, wrapperDefaults)
  )
  props["controller"] = {}

  init(subscribers, observers, props)
  useStateListener({ observers, ...props })
  const handlers = useEventManagement({ subscribers })
  return (
    <div {...props["container"]}>
      <Component {...props} {...handlers} />
    </div>
  )
}

export const Wrapper = memo(WrapperComponent, arePropsEqual)

export interface iWrapper {
  Component: React.FC<any>
  defaults: any
  name: string
  init?: ([], [], {}) => void
}

export interface iReactive {
  subscribers?: iSubscriber[]
  observers?: iObserver[]
  props?: Object
}

function arePropsEqual(prevProp, newProps) {
  return true
}
