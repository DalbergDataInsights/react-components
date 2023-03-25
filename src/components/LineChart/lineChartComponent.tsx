import React, { useMemo } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { iLineChart } from "./lineChartInterface"
import transformData from "./lineChartUtils"

export const LineChartComponent = ({
  data,
  colors = ["#D1D1D6", "#8E8E93"],
  useGrid = false,
  props,
}: iLineChart) => {

  const transformedData = useMemo(() => transformData(data), [data])

  return (
    <div {...props.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          {...props.chart}
          data={transformedData}
        >
          {useGrid && <CartesianGrid strokeDasharray="3 3" opacity={0.5}/>}
          <XAxis {...props.xaxis} />
          <YAxis {...props.yaxis} />
          <Tooltip />
          <Legend {...props.legend}/>
          {transformedData.map((line: { id: React.Key | null | undefined; data: any }, i: number) => (
            <Line
              {...props.line}
              key={line.id}
              data={line.data}
              name={line.id}
              stroke={colors[i]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

