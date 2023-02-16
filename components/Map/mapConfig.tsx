export const defaults = {
  props: {
    mapstyle: "mapbox://styles/babkouew/ckr299qhb19zd17p8hbm1o3kk",
    mapboxAccessToken:
      "pk.eyJ1IjoiYmFia291ZXciLCJhIjoiY2tyMjI0ZG9uMjdoMDJvdDlzMHlsOHJzbCJ9.q0eMs76RUnb8_9z7fr-7XQ",
    map: {
      dragRotate: false,
      dragPan: false,
      scrollZoom: false,
      doubleClickZoom: false,
      style: { overflowY: "auto" },
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
        background: "rgba(0, 0, 0, 0.8)",
        color: "#fff",
        maxWidth: "300px",
        fontSize: "10px",
        zIndex: "9",
        pointerEvents: "none",
      },
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
    navigationControl: {
      position: "top-right",
    },
    fullscreenControl: {
      position: "top-right",
    },
    clickedInfo: {
      style: {
        top: "1.5%",
        right: "5%",
        fontWeight: "bold",
        textTransform: "capitalize",
      },
    },
    layerProps: {
      "data-fill-opacity": 1,
      "na-fill-color": "#bfbfbf",
      "blur-fill-color": "#bcbcbc",
      "blur-fill-opacity": 0.5,
      "outline-line-color": "#d2d4d4",
      "outline-line-width": 0.5,
      "highlight-line-color": "#d2d4d4",
      "highlight-line-width": 2,
    },
  },
}
