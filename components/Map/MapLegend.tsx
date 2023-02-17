import React, { memo } from "react"

interface MapLegendProps {
  colors: string[]
  steps?: number[]
  colorsNA?: string
  suffix?: string
  props?: any
}

interface StepsLabelsProps {
  stepList?: any[]
  suffix?: string
}

const MapLegend = ({ colors, steps, suffix = "", props }: MapLegendProps) => {
  const stepsLabels = getStepsLabels({ stepList: steps, suffix: suffix })

  return (
    <div>
      <div className="legend py-1 px-2" {...props?.legendBox}>
        <label {...props?.title}>Legend</label>
        <div>
          <div>
            <input
              className="h-4 w-8 opacity-70"
              type="color"
              value={colors.shift()}
              disabled
            />
            <label className="ml-1">n.d.</label>
          </div>
          {stepsLabels.map((label, index) => (
            <div key={label}>
              <input
                className="h-4 w-8 opacity-70"
                type="color"
                value={colors[index]}
                disabled
              />
              <label className="ml-1"> {label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getStepsLabels({ stepList, suffix = "" }: StepsLabelsProps): string[] {
  const stepsLabels = []

  if (stepList && stepList.every((element) => typeof element !== "string")) {
    stepsLabels.push(`-${Math.round(stepList[0])}${suffix}`)
    for (let i = 0; i < stepList.length - 1; i++) {
      stepsLabels.push(`${stepList[i]}${suffix} - ${stepList[i + 1]}${suffix}`)
    }
    stepsLabels.push(`+${Math.round(stepList[stepList.length - 1])}${suffix}`)
  }
  return [...new Set(stepsLabels)]
}

export default memo(MapLegend, () => false)
