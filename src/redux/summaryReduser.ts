import { ISummaryAction } from "../types/types";

const SET_ACTIVE_COUNT = "SET_ACTIVE_COUNT";
const SET_ARCHIVE_COUNT = "SET_ARCHIVE_COUNT";

let initialState = {
    title: { category: "Note Category", active: "Active", archived: "archived" },
      body: [
        { id: "1", category: "Task", active: 0, archived: 0 },
        { id: "2", category: "Random Thought", active: 0, archived: 0 },
        { id: "3", category: "Idea", active: 0, archived: 0 }
      ]
}

const summaryReduser = (state = initialState, action: ISummaryAction) => {
    switch (action.type) {        

        case SET_ACTIVE_COUNT: {
          return {
            ...state,
            body: state.body.map((e) => {
              if (e.category === action.category) {
                e.active = action.amount
              }

              return e;
            })
          }
        }

        case SET_ARCHIVE_COUNT: {
          return {
            ...state,
            body: state.body.map((e) => {
              if (e.category === action.category) {
                e.archived = action.amount
              }

              return e;
            })
          }
        }

        
        default:
            return state
    }
}

export const setActiveCount = (category: string, amount: number) => ({ type: SET_ACTIVE_COUNT, category, amount});
export const setArchiveCount = (category: string, amount: number) => ({ type: SET_ARCHIVE_COUNT, category, amount});

export default summaryReduser;