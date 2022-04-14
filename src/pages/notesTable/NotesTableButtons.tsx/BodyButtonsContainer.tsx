import React from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../../types/types';
import { deleteNote, archivNote, showEditForm, unarchivNote } from '../../../redux/notesReduser';
import BodyButtons from './BodyButtons';

const mapStateToProps = (state: IStore) => ({
  notesTable: state.notesTable,
});

export default connect(mapStateToProps, { deleteNote, archivNote, showEditForm, unarchivNote })(BodyButtons);
