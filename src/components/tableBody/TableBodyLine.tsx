import React from "react";
import { NoteType, SummaryBodyType } from "../../types/types";
import { getCategoryIconPath } from "../GetIcons";
import BodyButtonsContainer from "../../pages/notesTable/NotesTableButtons.tsx/BodyButtonsContainer";

type TableBodyLineType = {
    noteLine: NoteType | SummaryBodyType
    isSummary: boolean,
    isArchiv: boolean
}

function TableBodyLine(props: TableBodyLineType) {
    console.log()
    return (
        <tr key={props.noteLine.id}>
            <td><img src={getCategoryIconPath(props.noteLine.category)}/></td>
            {             
                Object.entries(props.noteLine).map((e) => {
                        if (e[0] !== "id") {
                            return <td>{e[1]}</td>
                        }})                
            }
            
            {props.isSummary ? "" : 
                <BodyButtonsContainer id={props.noteLine.id} isArchive={props.isArchiv}/>}
        </tr>
    )
}

export default TableBodyLine;