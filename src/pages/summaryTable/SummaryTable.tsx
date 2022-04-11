import React from "react";
import TableBody from "../../components/tableBody/TableBody";
import TableTitle from "../../components/tableTitle/TableTitle";
import { SummaryTableType } from "../../types/types";

function SummaryTable(props: SummaryTableType) {
    return (
        <table>
            <TableTitle titleState={props.summaryTable.title} isSummary={true} isArchiv={false}/>
            <TableBody bodyState={props.summaryTable.body} isSummary={true} isArchiv={false}/>
        </table>

    )
}

export default SummaryTable;