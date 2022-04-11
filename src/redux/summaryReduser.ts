import { NoteType, IAction } from "../types/types";


let initialState = {
    title: { category: "Note Category", active: "Active", archived: "archived" },
      body: [
        { id: "1", category: "Task", active: 0, archived: 0 },
        { id: "2", category: "Random Thought", active: 0, archived: 0 },
        { id: "3", category: "Idea", active: 0, archived: 0 }
      ]
}

const summaryReduser = (state = initialState, action: IAction) => {
    switch (action.type) {        

        default:
            return state
    }
}


export default summaryReduser;