import React from "react";
import TableBody from "../../components/tableBody/TableBody";
import TableTitle from "../../components/tableTitle/TableTitle";
import { INoteTable } from "../../types/types";
import SendFormContainer from "./sendForm/SendFormContainer";

function NotesTable(props: INoteTable) {

    return (
        <div className='noteTable'>
            <table>
                <TableTitle titleState={props.notesTable.title} isSummary={false} isArchiv={false} />
                <TableBody bodyState={props.notesTable.body} isSummary={false}
                    isArchiv={false} editForm={props.notesTable.editForm} />
            </table>
            
            { 
                !props.notesTable.isAddMode
                ?<button onClick={() =>props.showAddNoteForm()}>Add Note</button> 
                :<SendFormContainer /> }            
        </div>
    )
}

export default NotesTable;