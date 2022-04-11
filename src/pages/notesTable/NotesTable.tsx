import React from "react";
import TableBody from "../../components/tableBody/TableBody";
import TableTitle from "../../components/tableTitle/TableTitle";
import { INoteTable } from "../../types/types";

function NotesTable(props: INoteTable) {
    return (
        <table>
            <TableTitle titleState={props.notesTable.title} isSummary={false} isArchiv={false}/>
            <TableBody bodyState={props.notesTable.body} isSummary={false} isArchiv={false}/>
        </table>
    )
}

export default NotesTable;