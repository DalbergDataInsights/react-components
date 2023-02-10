import React from "react"
import { Wrapper } from "./core"

import { manifest as tableManifest, iTable } from "./components/Table"
import { iHeader } from "./components/Table/tableComponent"

/**
 * React table component to conveniently display data out of the box.
 * @param {[]} data - req - Data to visualise by default treated as list of rows
 * @param {iHeader[]} header - opt [] - List of {@link iHeader} headers
 * @param {boolean} displayHeader - opt true - whether to display headers in the table
 * @see Wrapper for extended container parameters
 * @returns
 */
export const Table = (props: iTable & any) => (
  <Wrapper {...tableManifest} {...props} />
)
