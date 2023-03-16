import React from "react"
import { Wrapper, iWrapper, iReactive } from "./core/wrapper"

import { manifest as namedGridManifest } from "./layouts/NamedGrid"
import { iNamedGrid } from "./layouts/NamedGrid"

export const NamedGrid = (props: iNamedGrid & iReactive) => (
  <Wrapper {...namedGridManifest} {...props} />
)
export { NamedGridArea as NamedArea } from "./layouts/NamedGrid/namedGridAreaElement"
