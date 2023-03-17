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
      container: {
        style: {
          position: "absolute",
          margin: "0.5rem",
          padding: "0.25rem",
          backgroundColor: "rgba(31, 69, 110)",
          opacity: "0.75",
          borderRadius: ".25rem",
          color: "#fff",
          fontSize: "0.6rem",
          zIndex: "9",
          pointerEvents: "none",
          display: "flex",
          columnGap: "0.5rem",
        },
      },
      arrow: {
        style: {
          content: "",
          position: "absolute",
          top: "50%",
          right: "100%",
          marginTop: "-0.3rem",
          borderWidth: "0.3rem",
          borderStyle: "solid",
          borderColor: "transparent rgba(31, 69, 110) transparent transparent",
        },
      },
      label: {
        style: {
          textAlign: "left",
          lineHeight: "1.2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        },
      },
      value: {
        style: {
          fontWeight: "550",
          textAlign: "right",
          lineHeight:"1.2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
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
