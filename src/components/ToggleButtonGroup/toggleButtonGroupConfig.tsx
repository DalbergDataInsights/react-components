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
        backgroundColor: "#D1D1D6",
        borderRadius: "1rem",
        padding: "1px",
      },
    },
    button: {
      type: "button",
      style: {
        fontSize: "0.8rem",
        lineHeight: "1rem",
        borderRadius: "1rem",
        fontWeight: 400,
        padding: "calc(0.5rem - 1px)",
        color: "black",
        flexGrow: 1,
        margin: "0",
        whiteSpace: "nowrap",
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
      style: { cursor: "pointer", fontWeight: 600 },
    },
  },
}
