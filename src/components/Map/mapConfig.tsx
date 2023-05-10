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
        top: "5%",
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
        backgroundColor: "#1F456E",
        opacity: "0.8",
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
          borderColor: "transparent #1F456E transparent transparent",
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
          fontWeight: "500",
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          rowGap: "0.5rem",
        },
      },
    },
    layers: {
      data: {
        naColor: "#bfbfbf",
        valueColumn: "value",
        type: "fill",
        paint: {
          "fill-opacity": 1,
        },
      },
      blur: {
        type: "fill",
        filter: [
          "in",
          "name",
          (states: any) => {
            return states.click?.noClick || []
          },
        ],
        paint: {
          "fill-color": "#d2d4d4",
          "fill-opacity": 0.5,
        },
      },
      outline: {
        type: "line",
        paint: {
          "line-color": "#d2d4d4",
          "line-width": 1,
        },
      },
      highlight: {
        type: "line",
        filter: ["==", "name", (states: any) => states.point?.name || ""],
        paint: {
          "line-color": "#d2d4d4",
          "line-width": 2,
        },
      },
      label: {
        type: "symbol",
        layout: {
          "text-field": ["get", "name"],
          "text-offset": [0, 0.6],
          "text-anchor": "center",
          "text-size": 10,
        },
      },
    },
  },
}
