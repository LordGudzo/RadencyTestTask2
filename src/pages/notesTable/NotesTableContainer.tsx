import React from "react";
import { connect } from "react-redux";
import { IStore } from "../../types/types";
import NotesTable from "./NotesTable";

const mapStateToProps = (state: IStore) => {
    return {
        notesTable: state.notesTable        
    }
}

export default connect(mapStateToProps, {})(NotesTable)