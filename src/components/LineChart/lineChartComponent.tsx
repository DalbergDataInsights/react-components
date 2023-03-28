import React, { useMemo } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { iLineChart } from "./lineChartInterface"

export const LineChartComponent = ({
  data,
  traces = [
    { dataKey: "x", stroke: "#D1D1D6" },
    { dataKey: "y", stroke: "#8E8E93" },
  ],
  children,
  props,
}: iLineChart) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart {...props.chart} data={data} _prop-target="chart">
        <XAxis {...props.xaxis} _prop-target="xaxis" />
        <YAxis {...props.yaxis} _prop-target="yaxis" />
        <Tooltip {...props.tooltip} _prop-target="tooltip" />
        {traces.map((trace) => {
          return <Line {...props.trace} {...trace} _prop-target="trace" />
        })}
        {children}
      </LineChart>
    </ResponsiveContainer>
  )
}
