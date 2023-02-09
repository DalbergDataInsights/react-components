import React from "react"
import { Wrapper } from "./core/wrapper"
import { manifest } from "./manifest"
import { ReactPropTypes } from "react"

export const Table = (props: ReactPropTypes) => (
  <Wrapper {...manifest["Table"]} {...props} />
)
