import React, { createContext } from "react"

export const ComponentContext = createContext({})
export const ComponentContextProvider = ({
  children,
  config,
}: {
  children: React.ReactNode
  config: Object
}) => {
  return (
    <ComponentContext.Provider value={config}>
      {children}
    </ComponentContext.Provider>
  )
}
