import React from 'react';
import SendFormContainer from '../../pages/notesTable/sendForm/SendFormContainer';
import { TableBodyType } from '../../types/types';
import TableBodyLine from './TableBodyLine';

function TableBody(props: TableBodyType): JSX.Element {
  return (
    <tbody>
      {props.bodyState.map((line) => {
        if (props.editForm === line.id) { //if will click by edit button editfrom will equil line id
          return <SendFormContainer />;
        }
        return <TableBodyLine key={line.id} noteLine={line} isSummary={props.isSummary} isArchiv={props.isArchiv} />;
      })}
    </tbody>
  );
}

export default TableBody;
