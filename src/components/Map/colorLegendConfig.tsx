export const defaults = {
  props: {
    legend: {
      style: {
        alignItems: "center",
        position: "absolute",
        width: "100%",
        bottom: "1rem",
      },
    },
    title: {
      style: {textAlign:"center", fontSize: "70%", fontWeight:"bold", color: "#777", clear: "both"},
    },
    scale: {
      style: {
        display: "flex",
        justifyContent: "space-around",
        flexFlow: "row wrap",
        alignItems: "stretch",
        minHeight: ".8rem",
        minWidth: "1ch",
        flexDirection: "row",
        verticalAlign: "middle",

      },
    },
    label: {
      style: {
        flexGrow: 2,
        textAlign: "center",
        fontSize: ".6rem",
      },
    },
    empty: {
      style: {
        flexGrow: 1
      }
    },
    colorNA: {
      style:{flexGrow: 2,
      borderTopLeftRadius: "0.5rem",
      borderBottomLeftRadius: "0.5rem",}
    }
  },
}
