export const defaults = {
  props: {
    headers: {
      style: {
        borderBottom: "2px solid #D1D1D6",
      },
    },
    header: {
      style: {
        fontSize: "1rem",
        lineHeight: "1rem",
        fontWeight: 600,
        padding: "0.5rem",
      },
    },
    table: {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        justifyContent: "flex-start",
        alignItems: "stretch",
        overflow: "hidden",
        overflowY: "auto",
        backgroundColor: "#F2F2F4",
        width: "100%",
      },
    },
    rows: {
      style: {
        display: "flex",
        width: "100%",
        gap: "0.5rem",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderBottom: "1px solid #D1D1D6",
      },
    },
    row: {
      style: {
        flexBasis: 0,
        flexGrow: 1,
        flexShrink: 0,
        color: "black",
        fontSize: "0.8rem",
        lineHeight: "1rem",
        padding: "0.5rem",
      },
    },
    icon: {
      style: {
        display: "inline-block",
        marginLeft: "0.1rem",
        cursor: "pointer",
      },
    },

    //   table: {
    //     spacing: 2,
    //     justifyContent: "space-evenly",
    //     alignItems: "stretch",
    //     direction: "row",
    //     style: {
    // backgroundColor: "#F4F5F6",
    // borderRadius: "4px",
    // boxShadow: "rgb(175 175 175) -0.5px 0.5px 2px 0.5px",
    // textAlign: "left",
    // height: "100%",
    // width: "100%",
    // maxHeight: "99%",
    // maxWidth: "95%",
    // padding: "0.5% 2.5%",
    // overflow: "auto",
    //     },
    //   },
    //   row: {
    //     style: { borderTop: "1px solid #5D5E5F", color: "#5D5E5F" },
    //   },
    //   cell: {
    //     xs: 1,
    //     style: {},
    //   },
    //   head: {
    //     style: {
    //       fontWeight: "bold",
    //       color: "#5D5E5F",
    //     },
    //   },
    // },
  },
}
