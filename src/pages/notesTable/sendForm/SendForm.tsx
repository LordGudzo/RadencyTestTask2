import React, { useState } from 'react';
import { getButtonIcon, getCategoryIconPath } from '../../../components/GetIcons';
import { NoteType } from '../../../types/types';

type EditFormType = {
  noteLine: NoteType;
  currentData: string;
  selectArray: [string];
  sendForm: (contentName: string, category: string, content: string) => void;
};

function EditForm(props: EditFormType): JSX.Element {
  const [contentNameState, setNameState] = useState<string>(props.noteLine.contnentName);
  const [contentState, setState] = useState<string>(props.noteLine.content);
  const [categoryState, setCategoryState] = useState('Task');

  function editNote() {
    props.sendForm(contentNameState, categoryState, contentState);
  }

  return (
    <tr>
      <td>
        <img src={getCategoryIconPath(props.noteLine.category)} />
      </td>

      <td>{props.currentData}</td>

      <td>
        <input type="text" value={contentNameState} onChange={(e) => setNameState(e.currentTarget.value)} />
      </td>

      <td>
        <select value={categoryState} onChange={(e) => setCategoryState(e.target.value)}>
          {props.selectArray.map((e) => (
            <option value={e}> {e} </option>
          ))}
        </select>
      </td>

      <td>
        <input type="text" value={contentState} onChange={(e) => setState(e.currentTarget.value)} />
      </td>

      <td>{props.noteLine.dates}</td>

      <td onClick={() => editNote()}>
        <button className="sendFormBtn"> Send </button>
      </td>
    </tr>
  );
}

export default EditForm;
