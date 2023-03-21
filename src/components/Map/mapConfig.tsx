export const defaults = {
  bounds: [
    [-15, 7.3],
    [-7.5, 12.7],
  ],
  props: {
    map: {
      mapStyle: "mapbox://styles/babkouew/ckr299qhb19zd17p8hbm1o3kk",
      mapboxAccessToken:
        "pk.eyJ1IjoiYmFia291ZXciLCJhIjoiY2tyMjI0ZG9uMjdoMDJvdDlzMHlsOHJzbCJ9.q0eMs76RUnb8_9z7fr-7XQ",
      dragRotate: false,
      dragPan: false,
      scrollZoom: false,
      doubleClickZoom: false,
      style: {},
    },
    tooltip: {
      anchor: {
        top: "2%",
        right: "5%",
      },
      style: {
        display: "flex",
        position: "absolute",
        width: "fit-content",
        gap: "0.5rem",
        padding: "0.5rem",
        borderRadius: ".5rem",
        fontSize: "0.75rem",
        lineHeight: "1rem",
        marginTop: "-1rem",
        marginLeft: "1rem",
        backgroundColor: "#3473B7",
        opacity: "0.75",
        color: "#fff",
        zIndex: "9",
        pointerEvents: "none",
      },
      pointer: {
        style: {
          content: "",
          position: "absolute",
          top: "25%",
          right: "100%",
          borderWidth: "0.3rem",
          borderStyle: "solid",
          borderColor: "transparent #3473B7 transparent transparent",
        },
      },
      label: {
        style: {
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          rowGap: "0.5rem",
        },
      },
      value: {
        style: {
          fontWeight: "600",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          rowGap: "0.5rem",
        },
      },
    },
    layers: {
      "data-fill-opacity": 1,
      "na-fill-color": "#bfbfbf",
      "filter-blur": [
        "in",
        "name",
        (states: any) => {
          return states.click?.noClick || []
        },
      ],
      "blur-fill-color": "#d2d4d4",
      "blur-fill-opacity": 0.5,
      "outline-line-color": "#d2d4d4",
      "outline-line-width": 1,
      "filter-highlight": [
        "==",
        "name",
        (states: any) => states.point?.name || "",
      ],
      "highlight-line-color": "#d2d4d4",
      "highlight-line-width": 2,
    },

    legend: {
      position: "top-3 left-3", //using tailwind css
      title: {
        style: { fontWeight: "bold", color: "blue", alignSelf: "flex-end" },
      },
      legendBox: {
        style: {
          backgroundColor: "rgb(229 231 235)",
          opacity: "0.7",
        },
      },
    },
  },
}
