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
      textAnchor:"middle",
      alignmentBaseline:"middle",
      fill:"black",
      style: {
        color: "black",
        fontSize: "0.8rem",
        fontWeight:"400",
        lineHeight: "1rem",
      },
    },
    counter: {
      duration:"3",
      prefix: "",
    }
  },
}
