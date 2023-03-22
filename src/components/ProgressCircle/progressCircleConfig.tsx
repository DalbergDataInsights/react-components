const unit = "1rem"
const padding = "0.5rem"

export const defaults = {
  props: {
    circle: {
      height: "100%",
      width: "100%",
      style: {},
    },
    total: {
      stroke: "#E5E5EA",
      fill: "transparent",
      strokeWidth: "1rem",
    },
    progress: {
      fill: "transparent",
      strokeWidth: "1rem",
      strokeLinecap: "round",
      style: {
        transition: "stroke-dashoffset 3s",
        transform: "rotate(-90deg)",
        transformOrigin: "center",
      },
    },
    value: {
      style: {
        color: "black",
        fontSize: "0.8rem",
        lineHeight: "1rem",
      },
    },
  },
}
