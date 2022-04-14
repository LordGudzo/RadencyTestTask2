import React from 'react';
import { NoteType, SummaryBodyType } from '../../types/types';
import { getCategoryIconPath } from '../GetIcons';
import BodyButtonsContainer from '../../pages/notesTable/NotesTableButtons.tsx/BodyButtonsContainer';

type TableBodyLineType = {
  noteLine: NoteType | SummaryBodyType;
  isSummary: boolean;
  isArchiv: boolean;
};

function TableBodyLine(props: TableBodyLineType): JSX.Element {
  let keyId = 1;
  return (
    <tr key={props.noteLine.id}>
      
      <td key={keyId}>
        <img src={getCategoryIconPath(props.noteLine.category)} />
      </td>

      {Object.entries(props.noteLine).map((e) => {
        if (e[0] !== 'id') { 
          return <td key={++keyId}>{e[1]}</td>;
        }
      })}
      
      {/* isSummary will true if creates summary table */}
      {props.isSummary ? '' : <BodyButtonsContainer id={props.noteLine.id} isArchive={props.isArchiv} />}
    </tr>
  );
}

export default TableBodyLine;
