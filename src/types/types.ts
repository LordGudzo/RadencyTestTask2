export interface IAction {
    type: string,
    id?: number | string,
    note?: NoteType
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
}

export type INoteTable = {
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
    isArchiv: boolean
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
    summaryTable: ISummaryState
}