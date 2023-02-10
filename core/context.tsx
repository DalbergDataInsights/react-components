import React, { createContext } from "react"

export const ComponentContext = createContext({ container: {} })
export const ComponentContextProvider = ({
  children,
  config,
}: {
  children: React.ReactNode
  config: { container: {} }
}) => {
  return (
    <ComponentContext.Provider value={config}>
      {children}
    </ComponentContext.Provider>
  )
}
