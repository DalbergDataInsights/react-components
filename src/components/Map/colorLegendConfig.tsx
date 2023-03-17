export const defaults = {
  props: {
    legend: {
      style: {
        width: "100%",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        borderRadius: "2rem",
        position:"absolute",
      },
    },
    steps: {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "center",
      },
    },
    step: {
      style: {
        display: "block",
        flexGrow: 1,
        flexBasis: 0,
        textAlign: "center",
        fontSize: "0.8rem",
        lineHeight: "1rem",
      },
    },
    colors: {
      style: {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
      },
    },
    color: {
      style: {
        flexGrow: 2,
        height: "1rem",
        minWidth: "2rem",
      },
    },
    empty: {
      style: {
        flexGrow: 1,
        height: "1rem",
        minWidth: "1rem",
      },
    },
  },
}
