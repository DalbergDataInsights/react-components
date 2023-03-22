import React from "react"
import { Wrapper } from "./core"
import { iReactive } from "./core"

import { manifest as namedGridManifest } from "./layouts/NamedGrid"
import { iNamedGrid } from "./layouts/NamedGrid"

export const NamedGrid = (props: iNamedGrid & iReactive) => (
  <Wrapper {...namedGridManifest} {...props} />
)
export { NamedGridArea as NamedArea } from "./layouts/NamedGrid/namedGridAreaElement"
