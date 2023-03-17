import { textAlign } from "@mui/system";

export const defaults = {
    props: {
        container :{
            style : {
                display:"flex",
                width:"100%",
                height:"10%",
                border:"2px",
                borderRadius: 40,
                backgroundColor: "gray",
                borderColor: "black"
            }
        },
        bar :{
            style : {
                display: "flex",
                height:"100%",
                border:"2px",
                borderRadius: 40,
                backgroundColor: "green",
                alignItems: "baseline",
                justifyContent: "center",
            }
        },
        progresstext : {
            style: {
            padding: 10,
            color: 'white',
            fontWeight: 900
        }
          },
    }
}