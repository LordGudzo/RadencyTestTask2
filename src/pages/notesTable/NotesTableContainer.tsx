import React from "react";
import { connect } from "react-redux";
import { showAddNoteForm, setDates } from "../../redux/notesReduser";
import { IStore, INoteTable } from "../../types/types";
import NotesTable from "./NotesTable";

class NotesTableContainer extends React.Component<Object & INoteTable> {

    componentDidMount() {
        this.parserContentData();
    }

    componentDidUpdate(prevProps: INoteTable, prevState: any) {
        if(prevProps.notesTable.body.length !== this.props.notesTable.body.length) {
          this.parserContentData();
        }
    }

    //parsers contents in the state and changes data field in the state
    parserContentData() {
        let regExp = /(\d{1}|\d{2})(\/|\.)(\d{1}|\d{2})(\/|\.)\d{4}/g;

        this.props.notesTable.body.map((e) => {            
            let textForParser = e.content;
            let dates = textForParser.match(regExp);
            if (dates === null) dates = [""];
            this.props.setDates(e.id, dates.toString())
        })
    }


    render(): JSX.Element {
        return <NotesTable {...this.props} />
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        notesTable: state.notesTable
    }
}

export default connect(mapStateToProps, { showAddNoteForm, setDates })(NotesTableContainer)