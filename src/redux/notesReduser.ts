import { NoteType, INoteAction } from "../types/types";


const DELETE = "DELETE";
const ARCHIV = "ARCHIV";
const UNARCHIV = "UNARCHIV";
const ADD_NOTE = "ADD_NOTE";
const SHOW_EDIT_FORM = "SHOW_EDIT_FORM";
const SEND_EDIT_NOTE = "SEND_EDIT_NOTE";
const SHOW_ADD_NOTE_FORM = "SHOW_ADD_NOTE_FORM";
const SET_DATES = "SET_DATES"

let initialState = {
    title: { contnentName: "Name", created: "Created", category: "Category", content: "Content", dates: "Dates" },
    body: [
      {
        id: "1", contnentName: "Shoping List1", created: "April 20, 2021", category: "Task",
        content: "3.5/2022", dates: ""
      },
      {
        id: "2", contnentName: "Shoping List2", created: "April 20, 2021", category: "Random Thought",
        content: "I am gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
        dates: ""
      },
      {
        id: "3", contnentName: "Shoping List3", created: "April 20, 2021", category: "Task",
        content: "asfasfasf", dates: ""
      },
      {
        id: "4", contnentName: "Shoping List4", created: "April 20, 2021", category: "Idea",
        content: "asfasfasf", dates: ""
      },
      {
        id: "5", contnentName: "Shoping List5", created: "April 20, 2021", category: "Task",
        content: "asfasfasf", dates: ""
      }
    ],
    archivedNotes: [],  // stores archived objects from body
    textInputsArray: ["contnentName", "content"],
    selectArray: ["Task", "Random Thought", "Idea"],
    editForm: "",
    isAddMode: false
}

const notesReduser = (state = initialState, action: INoteAction) => {
    switch (action.type) {
        case DELETE: {
            return {
                ...state,
                body: state.body.filter(e => e.id !== action.id),
                archivedNotes: [...state.archivedNotes]
            }
        }

        case ARCHIV: {            
            let newArchivObject = state.body.filter(e => e.id === action.id);
            return {
                ...state,
                body: state.body.filter(e => e.id !== action.id),
                archivedNotes: [...state.archivedNotes, ...newArchivObject]
            }
        }

        case UNARCHIV: {
            let unarchivObject = state.archivedNotes.filter((e: NoteType) => e.id === action.id);
            return {
                ...state,
                body: [...state.body, ... unarchivObject],
                archivedNotes: state.archivedNotes.filter((e: NoteType) => e.id !== action.id),
            }
        }

        case SHOW_ADD_NOTE_FORM: {
            return {
                ...state,
                isAddMode: true
            }
        }

        case ADD_NOTE: {
            return {
                ...state,
                body: [...state.body, action.note],
                isAddMode: false
            }
        }

        case SHOW_EDIT_FORM: {
            return {
                ...state,
                editForm: action.id
            }
        }

        case SEND_EDIT_NOTE: {            
            let bodyCopy = state.body.map((e) => {
                if (e.id === action.id) {
                    return action.note;
                }
                return e;
            })

            state.editForm = "0"
            return {
                ...state,
                body: [... bodyCopy]
            }
        }

        case SET_DATES: {
            return {
                ...state,
                body: state.body.map((e) => {
                    if (e.id === action.id) {
                        if (action.datesContent === undefined) action.datesContent = ""
                        e.dates = action.datesContent
                    }

                    return e;
                })
            }
        }

        default:
            return state
    }
}

export const deleteNote = (id: number | string) => ({ type: DELETE, id });
export const archivNote = (id: number | string) => ({ type: ARCHIV, id });
export const unarchivNote = (id: number | string) => ({ type: UNARCHIV, id });
export const showAddNoteForm = () => ({ type: SHOW_ADD_NOTE_FORM});
export const addNote = (note: NoteType) => ({ type: ADD_NOTE, note });
export const showEditForm = (id: number | string) => ({ type: SHOW_EDIT_FORM, id });
export const sendEditNote = (note: NoteType, id: number | string) => ({ type: SEND_EDIT_NOTE, note, id });
export const setDates = (id: number | string, datesContent: string) => ({ type: SET_DATES, id, datesContent });


export default notesReduser;

