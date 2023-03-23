import { textAlign } from "@mui/system"

const unit = "1rem"
const padding = "0.5rem"

export const defaults = {
  props: {
    bar: {
      style: {
        padding: 0,
        margin: 0,
      },
    },
    total: {
      style: {
        width: "100%",
        borderRadius: "0.75rem",
        backgroundColor: "#D1D1D6",
        overflow: "hidden",
      },
    },
    progress: {
      style: {
        height: "100%",
        borderRadius: unit,
        transition: "width 3s",
      },
    },
    pointer: {
      style: {
        height: unit,
        width: unit,
        borderRadius: unit,
        background: "transparent",
      },
    },
    labels: {
      style: {
        width: "100%",
        overflow: "hidden",
        paddingTop: "0.5rem",
      },
    },
    label: {
      style: {
        fontSize: "0.8rem",
        lineHeight: "1rem",
        textAlign: "right",
        float: "left",
        transition: "width 3s",
      },
    },
    value: {
      style: {
        fontSize: "0.8rem",
        lineHeight: "1rem",
        textAlign: "right",
        float: "left",
        transition: "width 3s",
      },
    },
    counter: {
      duration: "3",
      prefix: "",
      style: {
        fontSize: "0.8rem",
      }
    }
  },
}
