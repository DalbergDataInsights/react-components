export const defaults = {
  props: {
    table: {
      spacing: 2,
      justifyContent: "space-around",
      direction: "row",
      alignItems: "stretch",
      height: "99%",
      width: "95%",
      marginRight: "2.5%",
      marginLeft: "2.5%",
      padding: "0.5%",
      style: {
        backgroundColor: "rgb(243, 243, 243)",
        border: "1px solid rgb(208, 208, 208)",
        boxShadow: "rgb(175 175 175) -0.5px 1px 2px 0.5px",
      },
    },
    row: {},
    cell: {
      xs: 1,
      style: {},
    },
    head: {
      style: { fontWeight: "bold" },
    },
  },
}
