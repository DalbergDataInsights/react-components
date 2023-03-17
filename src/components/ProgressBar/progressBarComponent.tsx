
import React,{ memo } from "react"
import { mergeDicts } from "../../core/util"


export interface iProgressBar {
    props?: any
    progress?: number
}

export const ProgressBarComponent = ({
    props,progress
        } :iProgressBar)=>{
        return (
        <div {...props.container}>
            <div
            {...mergeDicts(
                {
                  style: {
                    width: `${progress}%`,
                  },
                },
                {...props.bar}
              )}>
                <span {...props.progresstext}>
                    {`${progress}%`}
                    </span>
            </div>  
        </div>
        );
    }

export default memo(ProgressBarComponent, () => false)