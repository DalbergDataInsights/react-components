import { iDataPoint, iChartData } from './lineChartInterface';

function transformData(input: iDataPoint[]): iChartData[] {
  const output: iChartData[] = [];
  const map: { [key: string]: iChartData } = {};

  // loop through the input data
  for (let i = 0; i < input.length; i++) {
    const name = input[i].name;
    const pe = input[i].pe;
    const value = input[i].value;

    // if name not seen before, add new object to output array and map
    if (!map[name]) {
      map[name] = { id: name, data: [] };
      output.push(map[name]);
    }

    // add data point to data array in map
    map[name].data.push({ x: pe, y: value });
  }
  return output;
}

export default transformData;
