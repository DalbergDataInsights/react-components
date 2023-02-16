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
        backgroundColor: "#F4F5F6",
        borderRadius: "4px",
        boxShadow: "rgb(175 175 175) -0.5px 0.5px 2px 0.5px",
        textAlign: "left",
      },
    },
    row: {
      style: { borderTop: "1px solid #5D5E5F", color: "#5D5E5F" },
    },
    cell: {
      xs: 1,
      style: {},
    },
    head: {
      style: {
        fontWeight: "bold",
        color: "#5D5E5F",
      },
    },
  },
}
