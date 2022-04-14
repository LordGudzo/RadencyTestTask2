import React from 'react';
import TableBody from '../../components/tableBody/TableBody';
import TableTitle from '../../components/tableTitle/TableTitle';
import { SummaryTableType } from '../../types/types';

function SummaryTable(props: SummaryTableType): JSX.Element {
  return (
    <table>
      <TableTitle titleState={props.summaryTable.title} isSummary isArchiv={false} />
      <TableBody bodyState={props.summaryTable.body} isSummary isArchiv={false} />
    </table>
  );
}

export default SummaryTable;
