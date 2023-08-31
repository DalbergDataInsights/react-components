import React, { useEffect } from "react"

export const useOnLoad = ({
  onLoad,
  id,
}: {
  onLoad?: Function
  id: string
}) => {
  useEffect(() => {
    runAfterFramePaint(onLoad)
  }, [])
}

function runAfterFramePaint(callback) {
  requestAnimationFrame(() => {
    const messageChannel = new MessageChannel()
    messageChannel.port1.onmessage = callback
    messageChannel.port2.postMessage(undefined)
  })
}
