import React from "react";
import { connect } from "react-redux";
import { IStore } from "../../types/types";
import ArchivTable from "./ArchivTable";



const mapStateToProps = (state: IStore) => {
    return {
        notesTable: state.notesTable        
    }
}

export default connect(mapStateToProps, {})(ArchivTable)