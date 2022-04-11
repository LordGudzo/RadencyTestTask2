import React from "react";
import { TableBodyType } from "../../types/types";
import TableBodyLine from "./tableBodyLine/TableBodyLine";


function TableBody(props: TableBodyType) {
    
    return (
        <tbody>
            {props.bodyState.map((line) => {
               return  <TableBodyLine noteLine={line} isSummary={props.isSummary} isArchiv={props.isArchiv}/>
            })}
        </tbody>
    )
}

export default TableBody;