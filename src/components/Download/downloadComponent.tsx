import React from "react"
import { handleDownload, dmToCSV } from "./downloadLogic"
import { iDownload } from "./downloadInterface"
import { SvgIcon } from "@mui/material"

export const DownloadComponent = ({ children }: { children: JSX.Element }) => {
  return <>{children}</>
}

export const DownloadElement = ({
  data,
  dtype = "text/csv",
  Icon = DownloadIcon,
  name = "data",
  props,
}: iDownload) => {
  return (
    <button
      _prop-target="button"
      {...props.button}
      onClick={async () =>
        handleDownload(data, { dtype, getter: dmToCSV, name })
      }
    >
      <Icon _prop-target="icon" props={props.icon} />
    </button>
  )
}

export const DownloadIcon = ({ props }: { props: object }) => {
  return (
    <SvgIcon {...props.svg}>
      <path
        d="m 12 16 v -10 m 4 6 l -4 4 l -4 -4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props.path}
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
        {...props.line}
      />
    </SvgIcon>
  )
}

export const downloadDefaults = {
  props: {
    button: {
      style: {
        display: "flex",
        backgroundColor: "transparent",
        border: "0.5px solid",
        justifyContent: "center",
        height: "2rem",
        width: "2.0rem",
        bottom: "1rem",
        left: "1rem",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        paddingLeft: "0.25rem",
        paddingRight: "0.25rem",
        position: "absolute",
      },
    },
    icon: {
      svg: {},
      path: {},
      line: {},
    },
  },
}
