import React from 'react';
import TitleButton from './TitleButton';
import { TableTitleType } from '../../types/types';

function TableTitle(props: TableTitleType): JSX.Element {
  let keyId = 1;
  return (
    <thead>
      <tr>
        <th key={keyId} />
        {Object.values(props.titleState).map((e) => (
          <th key={++keyId}>{e}</th>
        ))}

        {/* isSummary will true if creates summary table */}
        {props.isSummary ? '' : <TitleButton isArchiv={props.isArchiv} />}
      </tr>
    </thead>
  );
}

export default TableTitle;
