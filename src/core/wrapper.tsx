import React, { memo, useContext } from "react"

import { useEventManagement } from "./eventManager"
import { useStateListener } from "./stateListener"
import { mergeDicts } from "./util"
import { ComponentContext } from "./context"
import { iWrapper, iReactive } from "./interface"
import SvgIcon from "@mui/material/SvgIcon"

// try wrapping the init function in the callback to avoid mount spam?
export const Wrapper = ({
  Component,
  enableDownload,
  defaults,
  name,
  init = ({ subscribers, observers, props }: iReactive) => {},
  subscribers = [],
  observers = [],
  ...props
}: iWrapper & iReactive) => {
  let wrapperDefaults = {
    style: {
      height: "calc(100% - 1rem)",
      width: "calc(100% - 1rem)",
      padding: "0.5rem",
      overflow: "none",
      fontSize: "1rem",
      margin: "0 auto",
    },
  }

  const config = useContext(ComponentContext) // default: {}

  // this handles general case of the props - defaults < theme config < props
  props = mergeDicts(mergeDicts(defaults || {}, config[name] || {}), props)

  // this handles wrapper specific properties defaults < theme config < props
  let containerProps = mergeDicts(wrapperDefaults, config.Wrapper || {})
  containerProps = mergeDicts(containerProps, props.props?.container || {})

  props["controller"] = {}

  init({ subscribers, observers, props })
  useStateListener({ observers, ...props })
  const handlers = useEventManagement({ subscribers })

  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8," + convertToCSV(props.data)
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "data.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const convertToCSV = (data) => {
    const header = Object.keys(data[0]).join(",")
    const rows = data.map((row) => Object.values(row).join(","))
    return [header, ...rows].join("\n")
  }

  return (
    <div {...containerProps} key={props?.key}>
      <Component {...props} {...handlers} />
      {enableDownload && (
        <button onClick={handleDownload}>
          <SvgIcon>
            <path
              d="M12 16V6M16 12L12 16L8 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="5"
              y1="18"
              x2="19"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SvgIcon>
        </button>
      )}
    </div>
  )
}
