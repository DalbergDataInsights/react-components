import React from "react"

interface iControlPanel {
  children: React.ReactNode
  props: any
}

function ControlPanel({ children, props }: iControlPanel) {
  return (
    <div className="control-panel" {...props}>
      {children}
    </div>
  )
}

export default React.memo(ControlPanel)
