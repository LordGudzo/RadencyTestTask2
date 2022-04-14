import React from "react";
import TableBody from "../../components/tableBody/TableBody";
import TableTitle from "../../components/tableTitle/TableTitle";
import { IArchiveTable } from "../../types/types";

function ArchivTable(props: IArchiveTable) {
    return (
        <div className='noteTable'>
        <table>
            <TableTitle titleState={props.notesTable.title} isSummary={false} isArchiv={true} />
            <TableBody bodyState={props.notesTable.archivedNotes} isSummary={false}
                isArchiv={true} editForm={props.notesTable.editForm} />
        </table>          
    </div>
    )
}

export default ArchivTable;