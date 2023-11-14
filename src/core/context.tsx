"use client"

import React, { createContext } from "react"

interface iConfig {
  [index: string]: {}
}

export const ComponentContext = createContext({})
export const ComponentContextProvider = ({
  children,
  config,
}: {
  children: React.ReactNode
  config: iConfig
}) => {
  return (
    <ComponentContext.Provider value={config}>
      {children}
    </ComponentContext.Provider>
  )
}
