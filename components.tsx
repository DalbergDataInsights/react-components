import React from "react"
import { Wrapper } from "./core"

import { manifest as tableManifest, iTable, iHeader } from "./components/Table"

export const Table = (props: iTable) => (
  <Wrapper {...tableManifest} {...props} />
)
