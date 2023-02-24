export const defaults = {
  props: {
    dropdown: {
      style: {
        padding: "2px",
        position: "relative",
        backgroundColor: "#D1D1D6",
        borderRadius: "16px",
      },
    },
    button: {
      type: "button",
      style: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        borderRadius: "16px",
        background: "#FAFAFC",
        alignItems: "center",
        justifyContent: "space-between",
        height: "28px",
      },
    },
    label: {
      style: {
        textOverflow: "elipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        paddingLeft: "16px",
        color: "black",
      },
    },
    icon: {
      style: {
        width: "28px",
        height: "28px",
        color: "#D1D1D6",
        display: "block",
        paddingRight: "8px",
      },
    },
    menu: {
      style: {
        minWidth: "50%",
        position: "absolute",
        marginTop: "34px",
        top: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        cursor: "pointer",
        overflow: "hidden",
        padding: "2px",
        borderRadius: "16px",
        border: "2px solid #D1D1D6",
        transition: "all 0.5s linear",
      },
    },
    option: {
      style: {
        display: "block",
        padding: "8px 16px 8px 16px",
        color: "black",
        borderRadius: "16px",
      },
    },
    point: {
      style: {
        background: "#D1D1D6",
      },
    },
  },
}
