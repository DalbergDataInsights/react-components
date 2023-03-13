export const defaults = {
  bounds: [
    [-15, 7.3],
    [-7.5, 12.7],
  ],
  padding: { top: 50, bottom: 50 },
  props: {
    map: {
      mapStyle: "mapbox://styles/babkouew/ckr299qhb19zd17p8hbm1o3kk",
      mapboxAccessToken:
        "pk.eyJ1IjoiYmFia291ZXciLCJhIjoiY2tyMjI0ZG9uMjdoMDJvdDlzMHlsOHJzbCJ9.q0eMs76RUnb8_9z7fr-7XQ",
      dragRotate: false,
      dragPan: false,
      scrollZoom: false,
      doubleClickZoom: false,
      style: { overflowY: "hidden" },
    },
    tooltip: {
      anchor: {
        top: "2%",
        right: "5%",
      },
      style: {
        position: "absolute",
        margin: "8px",
        padding: "4px",
        background: "rgba(31, 69, 110, 0.75)",
        borderRadius: "4px",
        color: "#fff",
        minWidth: "108px",
        fontSize: "10px",
        zIndex: "9",
        pointerEvents: "none",
        minHeight: "48px",
      },
      arrowStyle: {
        content: "",
        position: "absolute",
        top: "50%",
        right: "100%",
        marginTop: "-5px",
        borderWidth: "5px",
        borderStyle: "solid",
        borderColor:
          "transparent rgba(31, 69, 110, 0.75) transparent transparent",
      },
      labelSpan: { textAlign: "left" },
      valueSpan: {
        fontWeight: "bold",
        textAlign: "right",
        clear: "right",
        float: 'right',
      },
    },
    layers: {
      "data-fill-opacity": 1,
      "na-fill-color": "#bfbfbf",
      "filter-blur": [
        "in",
        "name",
        (states) => {
          return states.click?.noClick || []
        },
      ],
      "blur-fill-color": "#d2d4d4",
      "blur-fill-opacity": 0.25,
      "outline-line-color": "#d2d4d4",
      "outline-line-width": 2,
      "filter-highlight": ["==", "name", (states) => states.point?.name || ""],
      "highlight-line-color": "#d2d4d4",
      "highlight-line-width": 4,
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
