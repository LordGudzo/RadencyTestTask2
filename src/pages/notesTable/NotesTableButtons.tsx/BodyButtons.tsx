import React from 'react';
import { getButtonIcon } from '../../../components/GetIcons';

type BodyButtonsType = {
  id: number | string;
  isArchive: boolean;
  deleteNote?: (id: number | string) => void;
  archivNote?: (id: number | string) => void;
  showEditForm?: (id: number | string) => void;
  unarchivNote?: (id: number | string) => void;
};

function BodyButtons(props: BodyButtonsType): JSX.Element {
  function deleteNote(id: number | string) {
    props.deleteNote && props.deleteNote(id);
  }

  function archivNote(id: number | string) {
    props.archivNote && props.archivNote(id);
  }

  function unarchivNote(id: number | string) {
    props.unarchivNote && props.unarchivNote(id);
  }

  function showEditForm(id: number | string) {
    props.showEditForm && props.showEditForm(id);
  }

  return (
    <td className="td_icons">
      {props.isArchive ? '' : <input onClick={() => showEditForm(props.id)} type="image" src={getButtonIcon('edit')} />}

      {props.isArchive ? (
        <input
          onClick={() => {
            unarchivNote(props.id);
          }}
          type="image"
          src={getButtonIcon('archiv')}
        />
      ) : (
        <input
          onClick={() => {
            archivNote(props.id);
          }}
          type="image"
          src={getButtonIcon('archiv')}
        />
      )}

      {props.isArchive ? '' : <input onClick={() => deleteNote(props.id)} type="image" src={getButtonIcon('delete')} />}
    </td>
  );
}

export default BodyButtons;
