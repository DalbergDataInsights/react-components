export const defaults = {
  props: {
    table: {
      spacing: 2,
      justifyContent: "space-evenly",
      alignItems: "stretch",
      direction: "row",
      height: "auto",
      width: "auto",
      maxHeight: "99%",
      maxWidth: "95%",
      margin: "0.5% 2.5%",
      overflow: "auto",
      style: {
        color: "#5D5E5F",
        borderRadius: "4px",
        boxShadow: "rgb(175 175 175) -0.5px 0.5px 2px 0.5px",
        textAlign: "left",
      },
    },
    row: {
      style: { borderTop: "1px solid #D7D9DE", backgroundColor: "#FFFFF" },
    },
    cell: {
      xs: 1,
      style: {},
    },
    head: {
      style: {
        fontWeight: "bold",
        backgroundColor: "#F4F5F6",
      },
    },
  },
}
