import React, { useMemo } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { iLineChart } from "./lineChartInterface"

export const LineChartComponent = ({
  data,
  X = "pe",
  Y = "",
  traces = [
    {dataKey: "value", stroke: "#D1D1D6"},
    {dataKey: "y", stroke: "#8E8E93"},
  ],
  children,
  props,
}: iLineChart) => {

  return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          {...props.chart}
          data={data}
        >
          {children}
          <XAxis {...props.xaxis} dataKey={X} />
          <YAxis {...props.yaxis} dataKey={Y} />
          <Tooltip 
            {...props.tooltip}
          />
          {
            traces.map(trace => {
              return (
                <Line
                  {...trace}
                  {...props.trace}
                />
              )
            })
          }
        </LineChart>
      </ResponsiveContainer>
  )
}

