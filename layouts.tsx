import React from "react"
import { Wrapper } from "./core/wrapper"

import { manifest as namedGridManifest } from "./layouts/NamedGrid"
import { iNamedGrid } from "./layouts/NamedGrid"

export const NamedGrid = (props: iNamedGrid) => (
  <Wrapper {...namedGridManifest} {...props} />
)
