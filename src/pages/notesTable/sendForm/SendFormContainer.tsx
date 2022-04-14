import React from "react";
import { connect } from "react-redux";
import { ISendFormContainer, IStore, NoteType } from "../../../types/types";
import SendForm from "./SendForm";
import { addNote, sendEditNote } from "../../../redux/notesReduser"

interface IDispath {
    sendEditNote: (note: NoteType, id: number | string) => void,
    addNote: (note: NoteType) => void
}

class SendFormContainer extends React.Component<ISendFormContainer & IDispath> {
    
    id = this.getId();

    getId() {        
        let id = this.props.notesTable.editForm; // if click edit in the row edit form = id this line

        if (id === "") {
          let lastNoteId = this.props.notesTable.body[this.props.notesTable.body.length - 1].id; //
          id = 1 + +lastNoteId;
        }

        return id;
    }

    getEditLine() {
        let line = {
            id: this.id, contnentName: "", created: "", category: "",
            content: "", dates: ""
          };

        this.props.notesTable.body.map((e) => {
            if (e.id === this.props.notesTable.editForm) {
                line = e;
            }
        })

        return line;
    }

    getCurrentData() {
        const data = new Date();
        const year = data.getFullYear();
        let month = this.parsNumberToMonthName(data.getMonth() + 1);//getMonth() return 0-11 so +1
        const day = data.getDate();

        return (month + " " + day + ", " + year)
    }

    /**
     * @monthNumber number from 1 to 12 
     * @returns month
     */
    parsNumberToMonthName(monthNumber: number) {
        switch (monthNumber) {
            case 1: {
                return "January"
            }
            case 2: {
                return "February"
            }
            case 3: {
                return "March"
            }
            case 4: {
                return "April"
            }
            case 5: {
                return "May"
            }
            case 6: {
                return "June"
            }
            case 7: {
                return "July"
            }
            case 8: {
                return "August"
            }
            case 9: {
                return "September"
            }
            case 10: {
                return "October"
            }
            case 11: {
                return "November"
            }
            case 12: {
                return "December"
            }
            default: {
                return "parsNumberToMonthName Function Bag"
            }
        }
    }

    sendForm = (contentName: string, category: string, content: string) => {
        debugger
        let note: NoteType = {
            id: "" + this.id,
            contnentName: contentName,
            created: this.getCurrentData(),
            category: category,
            content: content,
            dates: ""
        };
        (this.props.notesTable.editForm == 0) 
            ?this.props.addNote(note) 
            :this.props.sendEditNote(note, this.id)
        

    }

    render(): JSX.Element {
        return <SendForm noteLine={this.getEditLine()} currentData={this.getCurrentData()} 
        selectArray={this.props.notesTable.selectArray} sendForm={this.sendForm} />
    }
}

const mapStateToProps = (state: IStore) => {
    return {
        notesTable: state.notesTable
    }
}

export default connect(mapStateToProps, { sendEditNote, addNote })(SendFormContainer)