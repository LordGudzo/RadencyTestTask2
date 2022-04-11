import React from "react";
import { NoteType, SummaryBodyType } from "../../../types/types";
import { getCategoryIconPath } from "../../GetIcons";
import BodyButtons from "./BodyButtons";

type TableBodyLineType = {
    noteLine: NoteType | SummaryBodyType
    isSummary: boolean,
    isArchiv: boolean
}

function TableBodyLine(props: TableBodyLineType) {
    console.log(typeof (props.noteLine))
    return (
        <tr key={props.noteLine.id}>
            <td><img src={getCategoryIconPath(props.noteLine.category)}/></td>
            {
                Object.entries(props.noteLine).map((e) => {
                    if (e[0] !== "id") {
                        return <td>{e[1]}</td>
                    }})
            }
            
            {props.isSummary ? "" : <BodyButtons isArchive={props.isArchiv}/>}
        </tr>
    )
}

export default TableBodyLine;