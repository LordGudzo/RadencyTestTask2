import { NoteType } from "../types/types";

const DELETE = "DELETE";
const ARCHIV = "ARCHIV";
const UNARCHIV = "UNARCHIV";
const ADD_NOTE = "ADD_NOTE";
const EDIT_NOTE = "EDIT_NOTE";

let initialState = {
    title: { name: "Name", created: "Created", category: "Category", content: "Content", dates: "Dates" },
    body: [
      {
        id: "1", name: "Shoping List1", category: "Task", created: "April 20, 2021",
        content: "3.5/2022", dates: ""
      },
      {
        id: "2", name: "Shoping List2", created: "April 20, 2021", category: "Random Thought",
        content: "I am gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021",
        dates: ""
      },
      {
        id: "3", name: "Shoping List3", created: "April 20, 2021", category: "Task",
        content: "asfasfasf", dates: ""
      },
      {
        id: "4", name: "Shoping List4", created: "April 20, 2021", category: "Idea",
        content: "asfasfasf", dates: ""
      },
      {
        id: "5", name: "Shoping List5", created: "April 20, 2021", category: "Task",
        content: "asfasfasf", dates: ""
      }
    ],
    archivedNotes: [],  // stores archived objects from body
    textInputsArray: ["name", "content"],
    selectArray: ["Task", "Random Thought", "Idea"]
}

interface IAction {
    type: string,
    id?: number | string,
    note?: NoteType
}

const notesReduser = (state = initialState, action: IAction) => {
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

        case ADD_NOTE: {
            return {
                ...state,
                body: [...state.body, action.note]
            }
        }

        case EDIT_NOTE: {
            let bodyCopy = state.body.map((e) => {
                if (e.id === action.id) {
                    return action.note;
                }
                return e;
            })
            return {
                ...state,
                body: [... bodyCopy]
            }
        }
    }
}

export const deleteNoteAC = (id: number | string) => ({ type: DELETE, id });
export const archivNoteAC = (id: number | string) => ({ type: ARCHIV, id });
export const unarchivNoteAC = (id: number | string) => ({ type: UNARCHIV, id });
export const addNoteAC = (note: NoteType) => ({ type: ADD_NOTE, note });
export const editNoteAC = (note: NoteType, id: number | string) => ({ type: EDIT_NOTE, note, id });


export default notesReduser;