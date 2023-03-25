const unit = "1rem"

export const defaults = {
    props: {
        container: {
            style:{
                height:"400px", 
                width: "800px", 
                alignItems:"center", 
                margin: "4rem", 
                display: "block",
                padding: unit,
            },
        },

        chart: {
            margin: {
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
            },
            style: {
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                overflow: "hidden",
            },
        },
        grid : {
            stroke: "#D1D1D6",
            strokeDasharray: "3 3",
            opacity: 0.2,
        },
        xaxis: {
            dataKey: "x",
            name:"x",
            tickLine: false,
            allowDataOverflow: true,
            allowDuplicatedCategory: false,
        },
        yaxis: {
            dataKey: "y",
            name:"y",
            tickLine: false,
        },
        line: {
            type: "monotone",
            dataKey: "y",
            activeDot: { 
                stroke: "",
                strokeWidth: 2,
                r: 8,
             },
            animationDuration: 3000,
            animationEasing: "ease-in-out",

        },
        legend: {
            style: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: unit
            },
        },

    }
}