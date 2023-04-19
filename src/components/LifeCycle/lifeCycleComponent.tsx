import React, { useState, useEffect } from "react"
import { useDataQuery } from "@dhis2/app-runtime"
import { iLifeCycle } from "./lifeCycleInterface"
import { NoDataMessage } from "./noDataMessage"
// import { DefaultLoader } from "./defaultLoader"

export const LifeCycleComponent = ({
  children,
  query,
  variables = {},
  processor = ({ data }) => data,
  processorArgs = {},
//   loader = <DefaultLoader />,
    loader = <div>Loading...</div>,
  noData = <NoDataMessage message="Pas de données disponibles" />,
  errorMessage = (e: any) => JSON.stringify(e),
  debug = false,
}: iLifeCycle) => {
  if (debug) {
    console.debug("- Lifecycle component parameters -")
    console.debug(query)
    console.debug(variables)
  }

  const [data, setData] = useState(undefined)
  const [processorLoading, setprocessorLoading] = useState(true)
  const { loading, error, refetch } = useDataQuery(query, {
    variables,
    lazy: true,
    onError: (error) => {
      console.error(" -- useDataQuery failed within the LifeCycle component --")
      console.error(error)
    },
    onComplete: (d) => {
      // TODO cycle through indicators and set new data object
      try {
        setData(processor({ data: d, ...processorArgs }))
        setprocessorLoading(false)
      } catch (error) {
        setprocessorLoading(false)
        console.error(error)
        setData(undefined)
      }
      if (debug) {
        console.debug(
          `--- Data lifecycle with ${JSON.stringify(
            query
          )} and ${JSON.stringify(
            variables
          )}, query results into ${JSON.stringify(
            query[Object.keys(query)[0]].params(variables)
          )}----`
        )
        console.debug("--- Data fetched ---")
        console.debug(d)
        console.debug(
          `---- Processing data with arguments ${JSON.stringify(
            processorArgs
          )}----`
        )
        console.debug("---- Data processed ---")
        console.debug(processor({ data: d, ...processorArgs }))
      }
    },
  })

  useEffect(() => {
    if (debug)
      console.debug(
        `Refetching data based on new parameters with variables ${JSON.stringify(
          variables
        )}`
      )
    setprocessorLoading(true)
    refetch(variables)
  }, Object.values(variables))

  if (loading || processorLoading) return loader
  if (error) return errorMessage(error)
  if (!data && !processorLoading) return noData

  return <>{data && children(data)}</>
}
