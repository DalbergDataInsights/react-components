import React, { memo, useContext, useId } from "react"

import { useEventManagement } from "./eventManager"
import { useStateListener } from "./stateListener"
import { mergeDicts } from "./util"
import { ComponentContext } from "./context"
import { iWrapper, iReactive } from "./interface"
import {
  DownloadElement,
  downloadDefaults,
} from "../components/Download/downloadComponent"

// try wrapping the init function in the callback to avoid mount spam?
export const Wrapper = ({
  Component,
  defaults,
  name,
  init = ({ subscribers, observers, props }: iReactive) => {},
  enableDownload,
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
      position: "relative",
    },
  }

  const config = useContext(ComponentContext) // default: {}

  // this handles general case of the props - defaults < theme config < props
  props = mergeDicts(mergeDicts(defaults || {}, config[name] || {}), props)

  // this handles wrapper specific properties defaults < theme config < props
  let containerProps = mergeDicts(wrapperDefaults, config.Wrapper || {})
  containerProps = mergeDicts(containerProps, props.props?.container || {})

  let downloadProps = mergeDicts(downloadDefaults, config.Download || {})
  downloadProps = mergeDicts(downloadProps, props.props?.download || {})

  props["controller"] = {}

  init({ subscribers, observers, props })
  useStateListener({ observers, ...props })
  const handlers = useEventManagement({ subscribers })

  const id = useId()

  return (
    <MyDiv {...containerProps} id={props?.key || id} onLoad={handlers["onLoad"]}>
      <Component {...props} {...handlers}/>
      {enableDownload && (
        <DownloadElement
          name={name}
          {...(name === "Download"
            ? mergeDicts(downloadProps, props)
            : downloadProps)}
          data={
            name === "Map"
              ? props.data.features.map((f) => f.properties)
              : props.data
          }
        />
      )}
    </MyDiv>
  )
}


// Finished renderring check.
function runAfterFramePaint(callback) {
  requestAnimationFrame(() => {
      const messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = callback;
      messageChannel.port2.postMessage("Finished loading");
  });
}


const MyDiv = ({ onLoad, children, id,  ...props }) => {
    
  // Queues a requestAnimationFrame and onmessage
  runAfterFramePaint(() => {
      // Set a performance mark shortly after the frame has been produced.
      onLoad()
  });

  return <div {...props} key={id}>{children}</div>
} 