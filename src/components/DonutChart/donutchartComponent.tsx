import React, { useState, useEffect } from 'react'
import { iDonutChart } from './donutchartInterface'

export const DonutChartComponent = ({
    size = 250,
    progress = 75,
    color = "#7AA995",
    maxValue = 100,
    strokeWidth = 15,
    cirlceOneStroke="#E5E5EA",
    circleTwoStroke="#D1D1D6",
    suffix = "%",
    props,
}: iDonutChart) => {
    const [offset, setOffset] = useState(0)
    const center = size / 2
    const radius = size / 2 - strokeWidth * 2
    const circumference = 2 * Math.PI * radius
    console.log("radius", radius)



    useEffect(() => {
    setOffset(((maxValue - progress) / maxValue) * circumference)
    }, [setOffset, progress, circumference, maxValue])

    return (
        // <div {...props.chart}>
        <div>
            <svg width={size} height={size} {...props}>
                <circle
                    stroke={cirlceOneStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                />
                <circle
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    r={radius}
                    rx={10}
                    ry={10}
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style = {{
                        transition: "stroke-dashoffset 2s ease-in-out",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                        borderRadius: "1rem",
                    }}
                />
                <text
                    x={center}
                    y={center}
                    textAnchor="middle"
                    >
                    {progress}
                    {suffix}
                </text>
            </svg>
        </div>
    )
}

export default DonutChartComponent