import { iDataPoint, iChartData } from './lineChartInterface'

function transformData(
  input: iDataPoint[],
  xlabel = 'pe',
  ylabel = 'value',
  hue='name',
  ): iChartData[] {
  const output: iChartData[] = []
  const map: { [key: string]: iChartData } = {}

  // loop through the input data
  for (let i = 0; i < input.length; i++) {
    const groupBy = input[i][hue as keyof iDataPoint]
    const xlab = input[i][xlabel as keyof iDataPoint]
    const ylab = input[i][ylabel as keyof iDataPoint]

    // if groupBy variable not seen before, add new object to output array and map
    if (!map[groupBy]) {
      map[groupBy] = { id: groupBy, data: [] }
      output.push(map[groupBy])
    }

    // add data point to data array in map
    map[groupBy].data.push({ x: xlab, y: ylab })
  }
  return output
}

export default transformData
