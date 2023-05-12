import React from "react"
import { XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import * as rc from "recharts"
import { iChart, iTrace } from "./chartInterface"

export const ChartComponent = ({
  data,
  traces = [{ dataKey: "x" }, { dataKey: "y" }],
  axis = [{ dataKey: "pe" }, {}],
  type = "Bar",
  children,
  props,
}: iChart) => {
  const Chart = rc[`${type}Chart`]
  const traceMap = traces.map((trace) => ({ Trace: rc[type], ...trace }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <Chart {...props.chart} data={data} _prop-target="chart">
        {axis[0] && (
          <XAxis {...props.xaxis} {...(axis[0] || {})} _prop-target="xaxis" />
        )}
        {axis[1] && (
          <YAxis {...props.yaxis} {...(axis[1] || {})} _prop-target="yaxis" />
        )}
        <Tooltip {...props.tooltip} _prop-target="tooltip" />
        {traceMap.map((trace: iTrace, index: number) => {
          return (
            <trace.Trace
              key={index}
              {...props.trace}
              {...trace}
              _prop-target="trace"
            />
          )
        })}
        {children}
      </Chart>
    </ResponsiveContainer>
  )
}
