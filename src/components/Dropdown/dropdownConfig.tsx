export const defaults = {
  props: {
    dropdown: {
      style: {
        padding: "1px",
        position: "relative",
        backgroundColor: "#D1D1D6",
        borderRadius: "1rem",
      },
    },
    button: {
      type: "button",
      style: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        backgroundColor: "#FAFAFC",
        alignItems: "center",
        justifyContent: "space-between",
        height: "calc(2rem - 2px)",
        borderRadius: "1rem",
      },
    },
    label: {
      style: {
        textOverflow: "elipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: "black",
        paddingLeft: "1rem",
        fontSize: "0.8rem",
        lineHeight: "1rem",
      },
    },
    search: {
      type: "text",
      style: {
        marginLeft: "1rem",
        outline: "none",
        border: "none",
        flexBasis: "80%",
        backgroundColor: "#FAFAFC",
      },
    },
    icon: {
      style: {
        width: "1.5rem",
        height: "1.5rem",
        color: "#D1D1D6",
        display: "block",
        paddingRight: "0.5rem",
      },
    },
    menu: {
      style: {
        zIndex: 10,
        position: "absolute",
        minWidth: "50%",
        marginTop: "2.25rem",
        top: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        cursor: "pointer",
        overflow: "hidden",
        padding: "1px",
        borderRadius: "1rem",
        border: "1px solid #D1D1D6",
        transition: "all 0.5s linear",
      },
    },
    option: {
      style: {
        display: "block",
        padding: "0.5rem 1rem",
        color: "black",
        borderRadius: "1rem",
        fontSize: "0.8rem",
        lineHeight: "1rem",
      },
    },
    point: {
      style: {
        backgroundColor: "#D1D1D6",
      },
    },
  },
}
