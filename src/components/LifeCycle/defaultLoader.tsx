import React from "react"
import { ColorRing } from "react-loader-spinner"

const DefaultLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <ColorRing
        visible={true}
        height="3rem"
        width="3rem"
        ariaLabel="vida-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          "#C2585A",
          "#F19885",
          "#F3D59B",
          "#E4E5B0",
          "#ACDAAB",
          "#648C85",
        ]}
      />
    </div>
  )
}
export default DefaultLoader
