import React from "react";
import TitleButton from "./TitleButton";
import { TableTitleType } from "../../types/types";

function TableTitle(props: TableTitleType) {
    
    return (
        <thead>
            <tr>
                <th></th>
                {Object.values(props.titleState).map((e) => {
                   return <th>{e}</th>
                })}

                {props.isSummary ? "" : <TitleButton isArchiv={props.isArchiv}/>}
                
            </tr>
        </thead>
    )
}

export default TableTitle;