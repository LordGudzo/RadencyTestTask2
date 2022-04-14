export interface INoteAction {
    type: string,
    id?: number | string,
    note?: NoteType,
    datesContent?: string
}

export interface ISummaryAction {
    type: string,
    category: string,
    amount: number
}

export type NoteType = {
    id: number | string
    contnentName: string
    category: string
    created: string
    content: string
    dates: string
}

interface IObjectKeys {
    [key: string]: string | number;
}

export interface TitleType extends IObjectKeys {   
    contnentName: string
    category: string
    created: string
    content: string
    dates: string 
}

export interface IStore {
    notesTable: INoteState,
    summaryTable: ISummaryState
}

export interface INoteState {
    title: TitleType,
    body: [NoteType],
    archivedNotes: [NoteType],
    textInputsArray: [string],
    selectArray: [string],
    editForm: string | number,
    isAddMode: boolean
}

export type INoteTable = {
    notesTable: INoteState,
    showAddNoteForm: () => void,
    setDates: (id: number | string, datesContent: string) => void  
}

export type IArchiveTable = {
    notesTable: INoteState
}

export type ISendFormContainer = {
    notesTable: INoteState
}



export type TableTitleType = {
    titleState: TitleType | ISummaryTitle
    isSummary: boolean,
    isArchiv: boolean
}

export type TableBodyType = {
    bodyState: [NoteType] | [SummaryBodyType]
    isSummary: boolean,
    isArchiv: boolean,
    editForm?: string | number    
}

export interface ISummaryState {
    title: ISummaryTitle,
    body: [SummaryBodyType]
}

export interface ISummaryTitle extends IObjectKeys {
    category: string, 
    active: string, 
    archived: string
}

export type SummaryBodyType = {
    id: string | number, 
    category: string, 
    active: string | number, 
    archived: string | number
}

export type SummaryTableType = {
    summaryTable: ISummaryState,
    noteTable: INoteState,
    setActiveCount: (category: string, amount: number) => void
    setArchiveCount: (category: string, amount: number) => void
}