import React from "react"
import { iNoDataMessage } from "./lifeCycleInterface"

export const NoDataMessage = ({ 
  message, 
  props 
}: iNoDataMessage) => {
  return (
    <div 
      // eslint-disable-next-line react/no-unknown-property
      prop-target="no-data-message"
      { ...props.style }
    >
      {message}
    </div>
  )
}