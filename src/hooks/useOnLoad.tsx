import React, { useEffect } from "react"

export const useOnLoad = ({
  onLoad,
  children,
  id,
  ...props
}: {
  onLoad?: Function
  children: React.ReactNode
  id: string
}) => {
  useEffect(() => {
    runAfterFramePaint(onLoad)
  }, [])
  const OnLoadWrapper = () => {
    return (
      <div {...props} key={id}>
        {children}
      </div>
    )
  }
  return { OnLoadWrapper }
}

function runAfterFramePaint(callback) {
  requestAnimationFrame(() => {
    const messageChannel = new MessageChannel()
    messageChannel.port1.onmessage = callback
    messageChannel.port2.postMessage(undefined)
  })
}
