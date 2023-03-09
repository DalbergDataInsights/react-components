export const defaults = {
  props: {
    group: {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "nowrap",
        alignItems: "stretch",
        alignContent: "center",
        color: "black",
        backgroundColor: "#D1D1D6",
        borderRadius: "16px",
        padding: "2px",
      },
    },
    button: {
      type: "button",
      style: {
        flexGrow: 1,
        margin: "0",
        padding: "0",
        whiteSpace: "nowrap",
        borderRadius: "16px",
        height: "28px",
        border: "none",
        background: "none",
        transition: "all 0.1s linear",
        minWidth: "60px",
      },
    },
    click: {
      style: { background: "#FAFAFC" },
    },
    point: {
      style: { cursor: "pointer", fontWeight: "bold" },
    },
  },
}
