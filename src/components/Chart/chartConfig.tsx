const unit = "1rem"

export const defaults = {
  props: {
    chart: {
      margin: {
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      },
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "0.5rem",
        overflow: "hidden",
      },
    },
    trace: {
      animationDuration: 3000,
      animationEasing: "ease-in-out",
    },
    tooltip: {
      contentStyle: {
        backgroundColor: "#fff",
        border: "none",
      },
      labelStyle: {
        color: "#000",
        fontWeight: "bold",
      },
      isAnimationActive: true,
      animationDuration: 3000,
      animationEasing: "ease-in-out",
      style: {
        alignItems: "center",
        display: "block",
        padding: unit,
      },
    },
    xaxis: {},
    yaxis: {},
  },
}
