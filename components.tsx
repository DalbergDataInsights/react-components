import React from "react"
import { Wrapper } from "./core"

import { manifest as tableManifest, iTable, iHeader } from "./components/Table"

/**
 *
 * @example
 * ```jsx
 *     <Table
 *    container={{
 *    // pass container props. Please be careful as container should be standard
 *      style: {
 *        // one common usecase is to pass gridArea to component
 *        gridArea: "table",
 *      },
 *    }}
 *    data={[
 *      { id: 5, name: "banana", value: 0.53, qt: 10 },
 *      { id: 2, name: "orange", value: 0.52, qt: 20 },
 *    ]}
 *    header={[
 *      // list of dictionaries [iHeader]
 *      {
 *        index: "id",
 *        name: "Product ID",
 *        type: "text", // you can pass custom here, then you need to pass renderer
 *        // renderer: (props) => <div>{props.data //data is a value of a cell}</div> example of simple div around the value
 *        // props: {}, // any props you want to send to each cell of a given column
 *        hidden: false, // set this to true if you want to hide the column
 *      },
 *      // limitation: you need to provide dictionaries equal to the number of column
 *      // if you want to change the order of columns, it should contain at least index
 *      {},
 *      {},
 *      {},
 *    ]}
 *    props={{
 *      table: {
 *        // passed in table container [Mui Grid]
 *        // xs: 2, //other mui-grid properties
 *        style: { backgroundColor: "white" },
 *      },
 *      row: {
 *        // passed to each cell that in a row [Mui Item]
 *      },
 *      cell: {
 *        // passed to each cell
 *      },
 *    }}
 *    displayHeader={true}
 *  />
 *  ```
 */
export const Table = (props: iTable) => (
  <Wrapper {...tableManifest} {...props} />
)
